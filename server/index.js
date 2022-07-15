import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import fs from 'fs';
import path, { dirname } from 'path';


dotenv.config();
const app = express();
const __dirname = path.resolve();

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

let streamlogs = fs.createWriteStream(path.join(__dirname, './logs/logger.log'),{ flags: 'a' });

//Middlewares

//morgan for logging requests
app.use(morgan('combined', { stream: streamlogs}));
//applying limit for post request in bodyParser as images will be used in the request
app.use(bodyParser.json({limit: "30mb", extended: true}));
//this middleware will parse urlencoded payloads. Limit is applied same of bodyParser
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//this middleware give option to access resources from a particular host through browser
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.status(200).json("Server is running.");
})

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

//if connection to mongo successful then start the server
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen (PORT, () => {
        console.log(`Server running on ${PORT}`);
    }))
    .catch((err) => {
        console.log(err.message);
    })

//to avoid deprecation warning like findOneAndUpdate() will be by default true
//mongoose.set("useFindAndModify", false);
