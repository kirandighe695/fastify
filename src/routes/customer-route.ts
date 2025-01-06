import { FastifyInstance } from "fastify";
import * as CustomerController from "../controllers/customer-controller";

export default async function customerRoute(fastify: FastifyInstance) {
    fastify.post("/", CustomerController.createCustomers)
    fastify.get("/", CustomerController.getAllCustomers)
    fastify.get("/getCustomer/:customer_id", CustomerController.getCustomerById)
    fastify.put("/updateCustomer/:customer_id", CustomerController.updateCustomerById)
    fastify.delete("/deleteCustomer/:customer_id", CustomerController.deleteCustomerById)
}