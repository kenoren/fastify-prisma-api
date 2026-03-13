import {PrismaClient} from "@prisma/client/extension";
import {prisma} from "../prisma";

async function  createUser(data: { login: string; firstname?: string; lastname?: string; email?: string; password?: string }) {
    return prisma.user.create({ data })
}

async function  getAllUsers() {
    return prisma.user.findMany()
}

async function deleteUser(id: string) {
    return prisma.user.delete({
        where: { id: Number(id) }
        }
    )
}

async function updateUser(id: string ,data: { login: string; firstname?: string; lastname?: string; email?: string; password?: string }) {
    return prisma.user.update({
        where: {id: Number(id)},
        data
    })
}

export const userService = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
}
