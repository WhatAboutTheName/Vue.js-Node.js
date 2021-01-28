const Product = require('../models/product');
const User = require('../models/user');

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

exports.postOrder = (req, res, next) => {
    User
        .findOne({ where: { email: req.body.email } })
        .then(user => {
            user.createOrder()
                .then(order => {
                    req.body.data.forEach(el => {
                        Product.findAll({ where: { id: el.id } })
                            .then(product => {
                                if (!product) return;
                                order.addProduct(product, { through: { quantity: el.quantity } });
                            })
                            .catch(err => {
                                if (!err.statusCode) {
                                    err.statusCode = 500;
                                }
                                next(err);
                            });
                    })
                })
                .catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        })
        .then(_ => {
            res.status(200).json({
                message: 'Order created successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
};

exports.getOrder = (req, res, next) => {
    User
        .findOne({ where: { email: req.query.email } })
        .then(user => {
            user.getOrders({include: ['products']})
                .then(orders => {
                    res.status(200).json({
                        orders: orders
                    });
                });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
