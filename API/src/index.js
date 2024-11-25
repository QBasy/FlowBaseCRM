const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('fastify-postgres'), {
    connectionString: 'postgres://username:password@localhost:5432/flowbasecrm'
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Server listening at http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
