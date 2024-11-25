const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:japierdole@localhost:5432/flowbasecrm');

sequelize.sync();
