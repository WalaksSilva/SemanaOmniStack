const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    data: {
        type: Date,
        default: Date.now,
    },
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;