import { v4 as uuidv4 } from 'uuid';
import CustomerModel from "../models/customer-model";
import { CustomerInterface } from '../interfaces/customer-interface';

export async function createCustomers(customers: CustomerInterface) {
    const customerId = uuidv4();
    const customerwithId = { ...customers, customer_id: customerId }
    return await CustomerModel.create(customerwithId)
}

export async function getAllCustomers(customers: CustomerInterface) {
    return await CustomerModel.findAll({ where: { ...customers } })
}

export async function getCustomerById(customer_id: String) {
    return await CustomerModel.findOne({ where: { customer_id } })
}

export async function updateCustomerById(customer_id: String, data: CustomerInterface) {
    const update = await CustomerModel.findOne({ where: { customer_id } })
    if (!update) return null
    await update.update(data)
    return update
}

export async function deleteCustomerById(customer_id: String) {
    return await CustomerModel.destroy({ where: { customer_id } })
}