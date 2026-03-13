import {FastifyReply, FastifyRequest} from "fastify";
import {UserSchema} from "../schemas/UserSchema";
import {userService} from "../services/UserService";
import {CommentService} from "../services/CommentService";

async function createComment(request: FastifyRequest<{ Body: { title: string,content: string,authorId: number,postId: number } }>, reply: FastifyReply) {
    const comment = await CommentService.createComment(request.body)
    reply.status(201).send(comment)
}

async function getAllComments(request: FastifyRequest, reply: FastifyReply) {
    const comment = await CommentService.getAllComments()
    reply.status(201).send(comment)
}

async function deleteComment(request: FastifyRequest, reply: FastifyReply) {
    try {
        await CommentService.deleteComment(request.id)
        reply.status(201).send()
    }catch{
        reply.status(404).send({error : "Comment not found"})
    }
}


export const commentController = {
    createComment,
    getAllComments,
    deleteComment,
}