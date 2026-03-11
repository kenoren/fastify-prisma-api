import {PrismaClient} from "@prisma/client/extension";
import {prisma} from "../prisma";

async function  createUser(data: { login: string; firstname?: string; lastname?: string; email?: string; password?: string }) {
    return prisma.user.create({ data })
}

async function  getAllUsers() {
    return prisma.user.findMany()
}

export const userService = {
    createUser,getAllUsers
}
