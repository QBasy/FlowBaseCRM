const { Customer } = require('../models');

// Получение всех клиентов
exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error });
    }
};

// Создание нового клиента
exports.createCustomer = async (req, res) => {
    const { name, email, phone, address } = req.body;
    try {
        const customer = await Customer.create({ name, email, phone, address });
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error creating customer', error });
    }
};

// Получение клиента по ID
exports.getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer', error });
    }
};

// Обновление данных клиента
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        await customer.update({ name, email, phone, address });
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating customer', error });
    }
};

// Удаление клиента
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        await customer.destroy();
        res.status(200).json({ message: 'Customer deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error });
    }
};
