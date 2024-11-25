const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://username:password@localhost:5432/flowbasecrm');

const User = require('./user')(sequelize, DataTypes);
const Customer = require('./customer')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);
const Payment = require('./payment')(sequelize, DataTypes);

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database synced!');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

module.exports = { sequelize, User, Customer, Order, Product, Payment };
