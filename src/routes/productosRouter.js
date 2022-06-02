const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/productos', productosController.productos);

module.exports = router;