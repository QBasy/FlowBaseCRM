const { Order, Customer, Product } = require('../models');

// Получение всех заказов
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ include: [Customer, Product] });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
};

// Создание нового заказа
exports.createOrder = async (req, res) => {
    const { totalAmount, status, customerId } = req.body;
    try {
        const order = await Order.create({ totalAmount, status, customerId });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
};

// Получение заказа по ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id, { include: [Customer, Product] });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error });
    }
};

// Обновление данных заказа
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { totalAmount, status, customerId } = req.body;
    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        await order.update({ totalAmount, status, customerId });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
};

// Удаление заказа
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        await order.destroy();
        res.status(200).json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
};
