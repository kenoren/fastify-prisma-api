import Fastify from "fastify"
import swagger from "@fastify/swagger"
import swaggerUI from "@fastify/swagger-ui"

import { prisma } from "./prisma"
import { userRoutes } from "./routes/UserRoutes"
import { postRoutes } from "./routes/PostRoutes"
import { errorHandler } from "./plugins/errorHandler"
import {commentRoutes} from "./routes/CommentRoutes";

const app = Fastify({ logger: true })

async function start() {

    await app.register(swagger, {
        openapi: {
            info: {
                title: "Fastify Prisma API",
                version: "1.0.0"
            }
        }
    })

    await app.register(swaggerUI, {
        routePrefix: "/docs"
    })
    //--------------Plugin-----------------
    app.register(errorHandler)

    //--------------Routes-----------------
    userRoutes(app)
    postRoutes(app)
    commentRoutes(app)



    await app.listen({ port: 3000 })

    console.log("Server running on http://localhost:3000")
}

start()