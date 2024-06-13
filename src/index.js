import dotenv from 'dotenv'
import connectDB from './db/db.js'


dotenv.config({
    path: "./env"
})



connectDB();

















/*
import express from 'express';
const app = express();
(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (err) => {
            console.log("ERRR", err);
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: ", error)
    }
})()

*/