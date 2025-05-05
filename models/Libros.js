const mongoose = require('mongoose');

const LibrosSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: String,
  resumen: { type: String, required: false },
  summary: String,
  genero: { type: String, required: false },
  summary: String,
  publicationDate: { type: Date, required: true },
  
});

module.exports = mongoose.model('Libros', LibrosSchema);
