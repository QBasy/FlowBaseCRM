const fastify = require('fastify')();
const { User, Customer, Order } = require('../models');
const userController = require('../controllers/user');
const customerController = require('../controllers/customer');
const orderController = require('../controllers/order');

// Пользователи
fastify.get('/users', userController.getAllUsers);
fastify.post('/users', userController.createUser);
fastify.get('/users/:id', userController.getUserById);
fastify.put('/users/:id', userController.updateUser);
fastify.delete('/users/:id', userController.deleteUser);

// Клиенты
fastify.get('/customers', customerController.getAllCustomers);
fastify.post('/customers', customerController.createCustomer);
fastify.get('/customers/:id', customerController.getCustomerById);
fastify.put('/customers/:id', customerController.updateCustomer);
fastify.delete('/customers/:id', customerController.deleteCustomer);

// Заказы
fastify.get('/orders', orderController.getAllOrders);
fastify.post('/orders', orderController.createOrder);
fastify.get('/orders/:id', orderController.getOrderById);
fastify.put('/orders/:id', orderController.updateOrder);
fastify.delete('/orders/:id', orderController.deleteOrder);

// Запуск Fastify
fastify.listen(3000, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server listening on http://localhost:3000');
});
