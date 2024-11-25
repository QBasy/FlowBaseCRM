// models/payment.js
module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false, // Например, 'card', 'cash', 'online'
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
        },
        orderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Orders',
                key: 'id',
            },
        },
    });

    Payment.associate = models => {
        Payment.belongsTo(models.Order, { foreignKey: 'orderId' });
    };

    return Payment;
};
