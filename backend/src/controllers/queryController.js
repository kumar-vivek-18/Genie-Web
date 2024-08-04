import { Query } from '../models/query.model.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); 

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use another email service
    auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS // your email password or app-specific password
    }
});

export const createQuery = async (req, res) => {
    try {
        console.log('hii');
        const { name, mobileNo, email, concern, countryCode,requestId } = req.body;
        const user = await Query.findOne({ email: email, mobileNo: mobileNo });
        console.log("user find", user);

        if (user) {
            user.concern.push(concern);
            user.save();
            res.status(201).json(user);
        }
        else {
            const newConcern = await Query.create({ name: name, countryCode: countryCode, mobileNo: mobileNo, email: email,requestId:requestId, concern: [concern] });
            console.log('newConcern', newConcern);
            res.status(201).json(newConcern);
        }

        const mailOptions = {
            from:`${email}`,
            to: 'info@culturtap.com',
            subject: 'New Query Recieved',
            text: `Name: ${name}\nCountry Code: ${countryCode}\nMobile No: ${mobileNo}\nEmail: ${email}\nRequestId: ${requestId}\nConcern: ${concern}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email', error });
            } else {
                console.log('Email sent:', info.response);
                res.status(201).json(response);
            }
        });

    } catch (error) {
        res.status(400).json(error);
    }
}