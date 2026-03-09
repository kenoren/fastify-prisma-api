import { FastifyRequest, FastifyReply } from "fastify"
import * as userService from "../services/UserService"

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
    const user = await userService.createUser(
        request.body as any
    )

    return reply.status(201).send(user)
}

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await userService.getAllUsers()
    return reply.send(users)
}