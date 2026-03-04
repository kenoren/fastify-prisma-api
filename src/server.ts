import Fastify from "fastify"
import { prisma } from "./prisma"

const app = Fastify({ logger: true })

app.get("/posts", async () => {
    return prisma.post.findMany()
})

app.get("/posts/:id", async (req, res) => {
    const { id } = req.params as any

    const post = await prisma.post.findUnique({
        where: { id: Number(id) }
    })

    if (!post) {
        res.code(404)
        return { error: "Post not found" }
    }
    res.code(200)
    return post
})

app.put("/posts/:id", async (req, res) => {
    const { id } = req.params as any
    const { title, content } = req.body as any

    try {
        const post = await prisma.post.update({
            where: { id: Number(id) },
            data: { title, content }
        })
        res.code(200)
        return post
    } catch (error) {
        res.code(404)
        return { error: "Post not found" }
    }
})

app.delete("/posts/:id", async (req, res) => {
    const {id} = req.params as any

    try {
        await prisma.post.delete({
            where: {id: Number(id)}
        })
        res.code(204)
        return
    } catch (error) {
        res.code(404)
        return {error: "Post not found"}
    }
})

app.post("/posts", async (request, reply) => {
    const { title, content } = request.body as any

    const post = await prisma.post.create({
        data: { title, content }
    })

    reply.code(201)
    return post
})

app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000")
})