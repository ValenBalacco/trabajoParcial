const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.get('/', librosController.getAllLibros);
router.get('/:id', librosController.getLibrosById);
router.post('/', librosController.createLibros);
router.put('/:id', librosController.updateLibros);
router.delete('/:id', librosController.deleteLibros);

module.exports = router; 