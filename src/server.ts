import Fastify from "fastify"
import { prisma } from "./prisma"

const app = Fastify({ logger: true })

app.get("/posts", async () => {
    return prisma.post.findMany()
})

app.get("/posts/:id", async (request, reply) => {
    const { id } = request.params as any

    const post = await prisma.post.findUnique({
        where: { id: Number(id) }
    })

    if (!post) {
        reply.code(404)
        return { error: "Post not found" }
    }
    reply.code(200)
    return post
})

app.put("/posts/:id", async (request, reply) => {
    const { id } = request.params as any
    const { title, content } = request.body as any

    try {
        const post = await prisma.post.update({
            where: { id: Number(id) },
            data: { title, content }
        })
        reply.code(200)
        return post
    } catch (error) {
        reply.code(404)
        return { error: "Post not found" }
    }
})

app.delete("/posts/:id", async (request, reply) => {
    const {id} = request.params as any

    try {
        await prisma.post.delete({
            where: {id: Number(id)}
        })
        reply.code(204)
        return
    } catch (error) {
        reply.code(404)
        return {error: "Post not found"}
    }
})

app.post("/posts", async (request, reply) => {
    const { title, content, authorId } = request.body as any

    const post = await prisma.post.create({
        data: { title, content, authorId }
    })

    reply.code(201)
    return post
})

app.get("/users", async (request, reply) => {
    return prisma.user.findMany()
})


app.post("/users", async (request, reply) => {
    const {login, firstname,lastname} = request.body as any
    const user = await prisma.user.create({
        data: {login, firstname,lastname}
    })
    reply.code(201)
    return user
})


app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000")
})