import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongodb_uri = `${process.env.MONGODB_URI}`;
console.log("db",mongodb_uri)
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected with host:', connection.connection.host);
    } catch (error) {
        console.log('MongoDB connection failed:', error);
        process.exit(1);
    }
}

export default connectDB;