import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		return { first_name: 'fawaz' }

		});

	server.get('/Homework', async (request, reply) => {
		// add your code here
		return { second_name: 'mohammed' }

	});
}
