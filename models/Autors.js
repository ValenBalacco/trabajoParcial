const mongoose = require('mongoose');

const AutorsSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  summary: String,
  bio: { type: String, required: false },
  summary: String,
  nacionalidad: { type: String, required: true },
  summary: String,
  fehchaNacimiento: { type: Date, required: true },
  libros: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Libros',
    required: true
  },
  
});

module.exports = mongoose.model('Autors', AutorsSchema);
