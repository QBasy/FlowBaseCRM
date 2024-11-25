// models/order.js
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending', // Например, pending, completed, canceled
        },
        customerId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Customers',
                key: 'id',
            },
        },
    });

    Order.associate = models => {
        Order.belongsTo(models.Customer, { foreignKey: 'customerId' });
    };

    return Order;
};
