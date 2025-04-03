const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

// const mongoose = require('mongoose');
const db = require('./config/db/connect');
// const { Schema } = mongoose;

const app = express();


const allowedOrigins = [
    'http://localhost:5173',  // Cho phép client
    'https://journey-project.onrender.com',
    'http://localhost:5174' // Cho phép admin
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,  // ⚠️ Quan trọng: Cho phép gửi cookie / session
  methods: 'GET,POST,PUT,PATCH,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  // Xử lý preflight request
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  }

  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
db.connect();

app.use(morgan('combined'));

// Routes
routes(app);
app.listen(3000, () => console.log('listening on http://localhost:3000'));
