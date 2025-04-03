const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

// const mongoose = require('mongoose');
const db = require('./config/db/connect');
// const { Schema } = mongoose;

const app = express();


// const allowedOrigins = [
//     'http://localhost:5173',  // Cho phép client
//     'https://journey-project.onrender.com',
//     'http://localhost:5174' // Cho phép admin
// ];

app.use(cors());

// origin: function (origin, callback) {
//   if (!origin || allowedOrigins.includes(origin)) {
//     callback(null, true);
//   } else {
//     callback(new Error('Not allowed by CORS'));
//   }
// },
// credentials: true,  // ⚠️ Quan trọng: Cho phép gửi cookie / session
// methods: 'GET,POST,PUT,PATCH,DELETE',
// allowedHeaders: 'Content-Type,Authorization'


// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
db.connect();

app.use(morgan('combined'));

// Routes
routes(app);
app.listen(3000, () => console.log('listening on http://localhost:3000'));
