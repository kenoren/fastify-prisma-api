import {PrismaClient} from "@prisma/client/extension";
import {prisma} from "../prisma";

export async function  createUser(data: { login: string; firstname?: string; lastname?: string; email?: string; password?: string }) {
    return prisma.user.create({ data })
}

export async function  getAllUsers() {
    return prisma.user.findMany()
}
