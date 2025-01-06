import { FastifyInstance } from "fastify"
import * as UserController from '../controllers/user-contoller'

export default async function userRoute(fastify: FastifyInstance) {
  fastify.post('/', UserController.createUsers)
  fastify.get('/', UserController.getAllUsers)
  fastify.get('/getUser/:user_id', UserController.getUserById)
  fastify.put('/updateUser/:user_id', UserController.updateUserById)
  fastify.delete('/deleteUser/:user_id', UserController.deleteUserById)
}