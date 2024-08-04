// import { Contact } from '../models/contact.model.js';

// export const createConcer = async (req, res) => {
//     try {
//         console.log("user find");
//         const { name, mobileNo, email, concern, countryCode } = req.body;
//         const user = await Contact.findOne({ email: email, mobileNo: mobileNo });
//         console.log("user find", user, mobileNo, email,concern, countryCode);

//         if (user) {
//             user.concern.push(concern);
//             user.save();
//             res.status(201).json(user);
//         }
//         else {
//             const newConcern = await Contact.create({ name: name, countryCode: countryCode, mobileNo: mobileNo, email: email, concern:[concern]});
//             // console.log("newConcern", newConcern);
//             res.status(201).json(newConcern);
//         }

//     } catch (error) {
//         res.status(400).json(error);
//     }
// }

import nodemailer from 'nodemailer';
import { Contact } from '../models/contact.model.js';
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

export const createConcer = async (req, res) => {
    try {
        console.log("user find");
        const { name, mobileNo, email, concern, countryCode,requestId } = req.body;
        const user = await Contact.findOne({ email: email, mobileNo: mobileNo });
        console.log("user find", user, mobileNo, email, concern, countryCode,requestId);

        let response;
        if (user) {
            user.concern.push(concern);
            await user.save();
            response = user;
        } else {
            const newConcern = await Contact.create({ name: name, countryCode: countryCode, mobileNo: mobileNo, email: email,requestId:requestId, concern: [concern] });
            response = newConcern;
        }

        // Prepare email data
        const mailOptions = {
            from:`${email}`,
            to: 'info@culturtap.com',
            subject: 'New Report Concern',
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
};
