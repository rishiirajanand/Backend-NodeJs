import dotenv from 'dotenv'
import connectDB from './db/db.js'
import { app } from './app.js';

dotenv.config({
    path: "./env"
})

const PORT = process.env.PORT || 3001



connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening at port: ${PORT}`);
    });

    app.on("error", (err) => {
        console.log("MONGODB connection ERROR !!!! ", err);
        throw err;
    });
})
.catch((err) => console.log("MONGODB connection FAIELD !!! ", err))

















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