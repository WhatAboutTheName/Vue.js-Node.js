const Sequelize = require('sequelize');

const sequelize = new Sequelize('vue_pizza', 'root', '159635gg', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;