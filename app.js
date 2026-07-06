import express from 'express';
import dotenv from 'dotenv';
import sampleRouter from './src/routes/sample.routes.js'

dotenv.config();

import connectDB from './src/config/db.config.js';


const app = express();

app.use(express.json());

connectDB();

const port = process.env.PORT || 5000;

app.use('/', sampleRouter);

app.listen(port, ()=> {
  console.log(`Server is Running on http://localhost:${port}`)
  console.log(`Server is Running`)
  console.log(`Server is Running`)
  console.log(`Server is Running`)
})


