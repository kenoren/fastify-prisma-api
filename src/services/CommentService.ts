import {prisma} from "../prisma";
import {FastifyRequest} from "fastify";


async function createComment(data: { title: string, content: string, authorId: number, postId: number }) {
    return prisma.comment.create({
        data: {
            title: data.title,
            content: data.content,

            post: {
                connect: {id: data.postId}
            },

            author: {
                connect: {id: data.authorId}
            }
        }
    })
}

async function getAllComments(){
    return prisma.comment.findMany()
}

async function deleteComment(id: string){
    return prisma.comment.delete({
        where : {id: Number(id) }
    })
}



export const CommentService = {
    createComment,
    getAllComments,
    deleteComment,
}