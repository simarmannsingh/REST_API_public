const express = require('express');
const router = express.Router();

// GET request for getting all information
router.get('/' , (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

// POST request to create a new order
router.post('/' , (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        createdOrder: order
    });
});

// GET request for getting information about a specific order
router.get('/:orderId' , (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

// DELETE request for deleting specific order
router.delete('/:orderId' , (req, res, next) => {
    res.status(200).json({
        message: 'Order was deleted',
        orderId: req.params.orderId
    });
});



module.exports = router; 