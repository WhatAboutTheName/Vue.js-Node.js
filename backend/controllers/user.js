const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product
        .findAll()
        .then(result => {
            res.status(200).json({
                products: result
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};