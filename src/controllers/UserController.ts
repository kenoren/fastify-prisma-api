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

async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
    try {
        await userService.deleteUser(request.id)
        return reply.status(201).send()
    }catch{
        return reply.status(401).send({error : "User not found"})
    }

}

async function updateUser(request: FastifyRequest, reply: FastifyReply) {

    const { id } = request.params as { id: string }

    const user = await userService.updateUser(
        id,
        request.body as {
            login: string
            firstname?: string
            lastname?: string
            email?: string
            password?: string
        }
    )

    reply.status(200).send(user)
}

export const userController = {
    createUser,
    getUsers,
    deleteUser,
    updateUser
}