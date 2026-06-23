const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        noteContent: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
    }
)

const noteModel = mongoose.model('note', noteSchema);
module.exports = {
    noteModel,
    noteSchema
};
