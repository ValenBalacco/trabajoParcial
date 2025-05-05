const Autors = require('../models/Autors');
const Libros = require('../models/Libros');
exports.getAllAutors = async (req, res) => {
  try {
    const autors = await Autors.find().populate('libros'); 
    res.json(autors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAutorsById = async (req, res) => {
  try {
    const autor = await Autors.findById(req.params.id).populate('libros'); 
    if (!autor) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json(autor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAutors = async (req, res) => {
  try {
    const { nombre, bio, nacionalidad, fehchaNacimiento, book } = req.body;

    if (!nombre || !nacionalidad || !fehchaNacimiento || !book) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios: nombre, nacionalidad, fehchaNacimiento, book' });
    }

    const autor = new Autors(req.body);
    const saved = await autor.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAutors = async (req, res) => {
  try {
    const updated = await Autors.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAutors = async (req, res) => {
  try {
    const deleted = await Autors.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json({ message: 'Autor eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBookToAuthor = async (req, res) => {
  try {
    const { id, bookId } = req.params;
    const autor = await Autors.findById(id);
    if (!autor) {
      return res.status(404).json({ message: 'Autor no encontrado' });
    }

    const libro = await Libros.findById(bookId);
    if (!libro) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    if (!autor.libros.includes(bookId)) {
      autor.libros.push(bookId);
      await autor.save();
    }

    res.status(200).json({ message: 'Libro agregado al autor', autor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
