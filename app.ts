import fastify from "fastify";
import { connectDatabase } from "./src/plugins/sequelize-plugin";
import indexRoutes from './src/routes/index'

const app = fastify({})

app.register(indexRoutes)

app.get('/task', async (request, reply) => {
    try {
        console.log(`Route Trace ID: ${(request as any).traceId}`);
        const dbStatus = await connectDatabase();
        if (dbStatus.connected) {
            reply.send({ status: 'ok', database: dbStatus.message });
        } else {
            reply.status(500).send({ status: 'error', message: dbStatus.message });
        }
    } catch (err) {
        reply.status(500).send({ status: 'error', message: 'An unknown error occurred' });
    }
});

let port = Number(process.env.APP_PORT) || 4900;

const start = async () => {
    try {
        const dbStatus = await connectDatabase();
        if (!dbStatus.connected) {
            console.log(dbStatus)
            throw new Error(dbStatus.message);
        }
        await app.listen({ port: port, host: "0.0.0.0" });
        console.log(`app listening on port ${port}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

start();
export default app;