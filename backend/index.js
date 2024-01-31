import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose'
import { User } from 'file:///C:/Ben/Programming/MERN_stack_website/backend/models/userModels.js';
import cors from 'cors';

import UserRoutes from './routes/UserRoutes.js';


const app = express();

//middleware for parsing request bodies
app.use(express.json());


//middleware for handling cors policy
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods:['GET', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

/*app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Bens MERN website ');
  });*/

  
app.use('/users', UserRoutes);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });