const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Connecting database
mongoose.connect('mongodb+srv://floormate:'+ process.env.MONGO_ATLAS_PW +'@floormanager-jyuyz.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


// Middleware for logging directly in console
app.use(morgan('dev'));

// Middleware for body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Middleware for CORS headers
// app.use((req,res, next) => {
//     res.header("Access-Control-Allow_Origin", "*" );
//     res.header(
//         "Access-Control-Allow-Headers", 
//         "Origin, X-Requested-With, Content-Type, Accept, Authorisation"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header ('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
//         return res.statusCode(200).json({});
//     }
//     next();
// });

app.use( '/products', productRoutes );
app.use( '/orders', orderRoutes );

//Middleware for error relating to data not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status= 404;
    next(error);

});

//Middleware for error relating to any other operation
app.use ((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports =app;