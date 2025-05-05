const express = require('express');
const router = express.Router();
const autorsController = require('../controllers/autorsController');

router.get('/', autorsController.getAllAutors);
router.get('/:id', autorsController.getAutorsById);
router.post('/', autorsController.createAutors);
router.put('/:id', autorsController.updateAutors);
router.delete('/:id', autorsController.deleteAutors);
router.put('/:id/addBook/:bookId', autorsController.addBookToAuthor);


module.exports = router;