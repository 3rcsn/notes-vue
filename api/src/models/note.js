const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
        note: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }
)

const note = mongoose.model('notes', noteSchema);
module.exports = {
    note,
    noteSchema
};
