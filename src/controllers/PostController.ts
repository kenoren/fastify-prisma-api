import { FastifyReply, FastifyRequest } from "fastify"
import {postService} from "../services/PostService";
import {PostSchema} from "../schemas/PostSchema";

type Params = {
    id: string
}

type UpdatePostBody = {
    title: string
    content: string
}

type CreatePostBody = {
    title: string
    content: string
    authorId: number
}

 async function getPosts(request: FastifyRequest, reply: FastifyReply) {
    const posts = await postService.getAllPosts()
    return reply.send(posts)
}

async function getPostById(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
    const post = await postService.getAllPostById(request.params.id)
    return reply.send(post)
}

async function updatePostById(request: FastifyRequest<{ Params: Params; Body: UpdatePostBody }>, reply: FastifyReply) {
    const post = await postService.putPostById(
        request.params.id,
        request.body
    )
    return reply.send(post)
}

async function deletePostById(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
    try {
        await postService.deletePostById(request.params.id)

        return reply.code(204).send()
    } catch (error) {
        return reply.code(404).send({ error: "Post not found" })
    }
}

export async function createPost(request: FastifyRequest<{ Body: CreatePostBody }>, reply: FastifyReply) {
    const validatePostCreate = PostSchema.parse(request.body)
    const post = await postService.createPost(request.body)

    return reply.code(201).send(post)
}

export const postController = {
    getPosts,
    getPostById,
    updatePostById,
    deletePostById,
    createPost,
}