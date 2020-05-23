const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/' , (req, res, next ) => {
  res.status(200).json ({
    message: 'this is a GET request for products'
  });
}); 


router.post('/' , (req, res, next ) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });

  // This save() function will save the data in DB on MongoDB using Mongoose
  product.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  
  res.status(201).json ({
    message: 'Handling POST request for products',
    createdProduct: product
  });
}); 


// GET request for endpoint  '/product'
router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;  
  //Dummy code to check if an ID named "special" is present
  if( id === 'special' ) {
    res.status(200).json({
      message:'You discovered special ID',
      id: id
      });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

// PATCH request for endpoint  '/product'
router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product is successfully patched (updated).'
  });
});

// DELETE request for endpoint  '/product'
router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Product is successfully deleted.'
  });
});



module.exports = router; 