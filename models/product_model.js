const mongoose = require('mongoose');

// Product model
const ModelSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  descripcion: {type: String, required: true},
  imagen: {type: String, required: true},
  precio: {type: String, required: true},
});

// Add model and export
const model = mongoose.model('producto', ModelSchema, 'producto');
module.exports = model;
