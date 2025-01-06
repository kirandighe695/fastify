import { UserInterface } from "../interfaces/user-interface";
import UserModel from "../models/user-model";
import { v4 as uuidv4 } from 'uuid';

export async function createUsers(users: UserInterface) {
    const userId = uuidv4();
    const userWithId = { ...users, user_id: userId };
    return await UserModel.create(userWithId);
}

export async function getAllUsers(users: UserInterface) {
    return await UserModel.findAll({ where: { ...users } })
}

export async function getUserById(user_id: string) {
    return await UserModel.findOne({ where: { user_id } });
}

export async function updateUserById(user_id: string, data: UserInterface) {
    const update = await UserModel.findOne({ where: { user_id } })
    if (!update) return null
    await update.update(data)
    return update
}

export async function deleteUserById(user_id: string) {
    return await UserModel.destroy({ where: { user_id } })
}