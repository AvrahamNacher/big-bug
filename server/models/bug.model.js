const mongoose = require('mongoose');

const { Schema } = mongoose;

const bugSchema = new Schema({
    bugTitle: {
        type: String,
        trim: true,
        required: true
    },
    bugDescription: {
        type: String,
        trim: true,
        required: false
    },
    bugCreatedDate: {
        type: Date,
        required: false
    },
    bugCreatedBy: {
        type: Number,
        required: false
    },
    bugAssignedTo: {
        type: Number,
        required: false
    },
    bugDueDate: {
        type: Date,
        required: false
    },
    bugStatus: {
        type: Number,
        required: false
    },
    bugSeverity: {
        type: Number,
        required: false
    },
    bugReproducibility: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;
