import { FastifyInstance } from "fastify";
import userRoute from "./user-route";
import customerRoute from "./customer-route";

const basePrefix = '/api';

export default async function (app: FastifyInstance) {
    app.register(userRoute, { prefix: `${basePrefix}/users` });
    app.register(customerRoute, { prefix: `${basePrefix}/customers` });
}