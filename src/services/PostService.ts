import {prisma} from "../prisma";
import {FastifyRequest} from "fastify";

async function getAllPosts() {
    return prisma.post.findMany()
}

async function getAllPostById(postId: string) {
    return prisma.post.findUniqueOrThrow({where: { id: Number(postId) }})
}

async function putPostById(id: string, data:{title: string; content: string}) {
    return prisma.post.update({
        where: { id: Number(id) },
        data
    })
}

async function createPost(data: { title: string, content: string,authorId: number }) {
    return prisma.post.create({
        data: {
            title: data.title,
            content: data.content,
            author: {
                connect: { id: data.authorId }
            }
        }
    })
}

async function deletePostById(id: string) {
    return prisma.post.delete({
        where: { id: Number(id) }
    })
}

export const postService = {
    getAllPosts,
    getAllPostById,
    putPostById,
    createPost,
    deletePostById
}

