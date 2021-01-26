const User = require('../models/user');

exports.SignUp = (req, res, next) => {
    User
        .create({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            isAdmin: false
        })
        .then(result => {
            res.status(200).json({
                message: 'User created successfully.'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.LogIn = (req, res, next) => {
    User
        .findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(user => {
            res.status(200).json({
                user: user
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};