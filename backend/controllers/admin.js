const Product = require('../models/product');

exports.addProduct = (req, res, next) => {
    const image = req.protocol + "://" + req.get("host");
    Product
        .create({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            img: image + "/images/" + req['file'].filename
        })
        .then(_ => {
            res.status(200).json({
                message: 'Product created successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};