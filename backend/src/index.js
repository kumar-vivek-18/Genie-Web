import express from 'express';
import connectDB from './db/db.js';
import colors from 'colors';
import dotenv from 'dotenv';
import Routes from '../src/routes/route.js'
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

connectDB()
    .then(() => {
        app.listen(PORT,'0.0.0.0', () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log('MongoDB connection error: ', error);
    })

// app.listen(5000, () => {
//     console.log('Sever in running on port: 5000'.yellow.bold)
// })'
// app.use('/',(req,res)=>{
//     return res.send('Welocme to culturTap');
// })

app.use('/', Routes);

