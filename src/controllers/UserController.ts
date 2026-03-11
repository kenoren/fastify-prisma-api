import { FastifyRequest, FastifyReply } from "fastify"
import {userService} from "../services/UserService";
import {UserSchema} from "../schemas/UserSchema";


async function createUser(request: FastifyRequest, reply: FastifyReply) {
    const validUser = UserSchema.parse(request.body)
    const user = await userService.createUser(
        validUser
    )

    return reply.status(201).send(user)
}

async function getUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await userService.getAllUsers()
    return reply.send(users)
}

export const userController = {
    createUser,
    getUsers,
}