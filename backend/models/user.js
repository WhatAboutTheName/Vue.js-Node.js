const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  password: Sequelize.STRING,
  isAdmin: Sequelize.BOOLEAN
},
  {
    timestamps: false,
  }
);

module.exports = User;
