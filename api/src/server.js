const {note, noteSchema} = require('./models/note');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const db = mongoose.connection;

const autoIncrement = require('mongoose-sequence')(mongoose);

noteSchema.plugin(autoIncrement, { inc_field: 'id' });

app.get('/api/getNotes', async (req, res) => {
    try {
        const notes = await note.find();
        res.json(notes);
    } catch (error) {
        res.status(  500).send(error);
    }
})

app.post('/api/saveNote', async (req, res) => {
    try {
        const newNote = await note.create({
            note: req.body.note
        });
        await newNote.save();
        res.status(201).send("success");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/', (req, res) => {
    res.json({ status: "vai tomando!" });
});

app.listen(PORT, () => {
    console.log('express up');
});




