const Libros = require('../models/Libros');

exports.getAllLibros = async (req, res) => {
  try {
    const libros = await Libros.find(); 
    res.json(libros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLibrosById = async (req, res) => {
  try {
    const libro = await Libros.findById(req.params.id); 
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(libro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createLibros = async (req, res) => {
  try {
    const pub = new Libros(req.body);
    const saved = await pub.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateLibros = async (req, res) => {
  try {
    const updated = await Libros.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteLibros = async (req, res) => {
  try {
    const deleted = await Libros.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
