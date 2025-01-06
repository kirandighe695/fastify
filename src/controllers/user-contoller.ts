import { FastifyReply, FastifyRequest } from "fastify";
import { UserInterface } from "../interfaces/user-interface";
import * as UserService from '../services/user-service'

export async function createUsers(request: FastifyRequest, reply: FastifyReply) {
    const user = request.body as UserInterface;

    const createNew = await UserService.createUsers(user)
    return reply.status(201).send({
        message: 'User created successfully',
        user_id: createNew.user_id
    })
}

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await request.params as UserInterface;

    const data = await UserService.getAllUsers(users)
    if (!data) {
        return reply.status(404).send({ message: 'User not found', users: [] });
    }

    return reply.status(200).send({
        message: 'Get all users successfully',
        users: data
    })
}

export async function getUserById(request: FastifyRequest<{ Params: { user_id: string } }>, reply: FastifyReply) {
    const { user_id } = request.params;

    const user = await UserService.getUserById(user_id)
    if (!user) {
        return reply.status(404).send({ message: 'User not found', user_id });
    }

    return reply.status(200).send({
        message: 'User get successfully',
        user
    })
}

export async function updateUserById(request: FastifyRequest<{ Params: { user_id: string } }>, reply: FastifyReply) {
    const { user_id } = request.params;
    const data = request.body as UserInterface;

    const user = await UserService.updateUserById(user_id, data)
    if (!user) {
        return reply.status(404).send({ message: 'User not found', user_id });
    }

    return reply.status(200).send({
        message: 'User Update successfully',
        user: user
    })
}

export async function deleteUserById(request: FastifyRequest<{ Params: { user_id: string } }>, reply: FastifyReply) {
    const { user_id } = request.params;

    const user = await UserService.deleteUserById(user_id)
    if (!user) {
        return reply.status(404).send({ message: 'User not found', user });
    }

    return reply.status(200).send({
        message: 'User Delete Successfully',
        user
    })
}
