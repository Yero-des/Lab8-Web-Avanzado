var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/', (req, res) => {
  productController.show(req, res);
});

router.post('/', (req, res) => {
  productController.create(req, res);
});
router.get('/show/:id', (req, res) => {
  productController.detail(req, res);
});
router.post('/update', (req, res) => {
  productController.update(req, res);
});
router.get('/delete/:id', (req, res) => {
  productController.delete(req, res);
});

module.exports = router;