const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('express up');
});