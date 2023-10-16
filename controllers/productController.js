let model = require('../models/product_model');

var productController = {}

productController.show = (req, res) => {

  // Get products
  model.find({})
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log("This is a fatal error in controller: ", err);
      res.sendStatus(500).json({ error: "Hubo un error al obtener los datos" });
    });

}


productController.create = (req, res) => {

  // Create a new product 
  let obj = new model;
  obj.nombre = req.body.nombre;
  obj.descripcion = req.body.descripcion;
  obj.imagen = req.body.imagen;
  obj.precio = req.body.precio;

  // Create new product
  obj.save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {      
      console.log("This is a fatal error in controller: ", err);
      res.sendStatus(500).json({ error: "Hubo un error al obtener los datos" });
    });
};

productController.detail = (req, res) => {

  // Get param id
  let val_id = req.params.id;

  // Get product by id
  model.findOne({ _id: val_id})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {      
      console.log("This is a fatal error in controller: ", err);
      res.sendStatus(500).json({ error: "Hubo un error al obtener los datos" });
    });

};

productController.update = (req, res) => {

  // Get id and data to update
  let val_id = req.body._id;
  let data_update = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    precio: req.body.precio
  }

  // Update product
  model.updateOne({ _id: val_id}, data_update)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {      
      console.log("This is a fatal error in controller: ", err);
      res.sendStatus(500).json({ error: "Hubo un error al obtener los datos" });
    });


};

productController.delete = (req, res) => {
  
  // Get id of product
  let val_id = req.params.id;

  // Delete product
  model.deleteOne({ _id: val_id})
    .then(() => res.sendStatus(200))
    .catch((err) => {      
      console.log("This is a fatal error in controller: ", err);
      res.sendStatus(500).json({ error: "Hubo un error al obtener los datos" });
    });
};

module.exports = productController