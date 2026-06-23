const {noteModel, noteSchema} = require('./models/note');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const db = mongoose.connection;

const autoIncrement = require('mongoose-sequence')(mongoose);

noteSchema.plugin(autoIncrement, { inc_field: 'id' });

app.get('/api/getNotes ', async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.json(notes);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post('/api/notes', async (req, res) => {
    try {
        const newNote =  new noteModel({
            name: req.body.name,
            description: req.body.description,
        });
        await newNote.save();
        res.status(201).send(newNote);
    } catch (error) {
        res.status(400).send(error);
    }
    noteModel.insertOne(req.body).then(note => {
    });
})

app.listen(PORT, () => {
    console.log('express up');
});




