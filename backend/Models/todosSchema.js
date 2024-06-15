const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todosSchema = new Schema ({
    name: {
        type: 'string',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('todos', todosSchema);
