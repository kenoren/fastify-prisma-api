import {FastifyReply, FastifyRequest} from "fastify";
import * as userService from "../services/PostService";
import {prisma} from "../prisma";

export async function getPosts(request: FastifyRequest, reply: FastifyReply) {
    const posts = await userService.getAllPosts()
    return reply.send(posts)
}

// export async function getPostById(id: number, request : FastifyRequest, reply: FastifyReply) {
//     const { id } = request.params as any
//
//     const post = await prisma.post.findUnique({
//         where: { id: Number(id) }
//     })
// }