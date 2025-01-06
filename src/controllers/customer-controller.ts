import { FastifyReply, FastifyRequest } from "fastify";
import { CustomerInterface } from "../interfaces/customer-interface";
import * as CustomerService from "../services/customer-service";

export async function createCustomers(request: FastifyRequest, reply: FastifyReply) {
    const customer = request.body as CustomerInterface;

    const createNew = await CustomerService.createCustomers(customer)
    return reply.status(201).send({
        message: "Customer Created Successfully",
        customer_id: createNew.customer_id
    })
}

export async function getAllCustomers(request: FastifyRequest, reply: FastifyReply) {
    const customer = request.params as CustomerInterface;

    const customers = await CustomerService.getAllCustomers(customer)
    if (!customers) {
        return reply.status(404).send({ message: 'Customer not found', customer: [] });
    }
    return reply.status(200).send({
        message: 'Get all Customer Successfully',
        customer: customers
    })
}

export async function getCustomerById(request: FastifyRequest<{ Params: { customer_id: string } }>, reply: FastifyReply) {
    const { customer_id } = request.params;

    const customer = await CustomerService.getCustomerById(customer_id)
    if (!customer) {
        return reply.status(404).send({ message: 'Customer not found', customer_id });
    }
    return reply.status(200).send({
        message: 'Get Customer Successfully',
        customer
    })
}

export async function updateCustomerById(request: FastifyRequest<{ Params: { customer_id: string } }>, reply: FastifyReply) {
    const { customer_id } = request.params;
    const data = request.body as CustomerInterface;

    const customer = await CustomerService.updateCustomerById(customer_id, data)
    if (!customer) {
        return reply.status(404).send({ message: 'Customer not found', customer_id })
    }
    return reply.status(200).send({
        message: 'Update Customer Successfully',
        customer: customer
    })
}

export async function deleteCustomerById(request: FastifyRequest<{ Params: { customer_id: string } }>, reply: FastifyReply) {
    const { customer_id } = request.params;

    const customer = await CustomerService.deleteCustomerById(customer_id)
    if (!customer) {
        return reply.status(404).send({ message: 'Customer not found', customer_id })
    }
    return reply.status(200).send({
        message: 'Delete Customer Successfully',
        customer
    })
}
