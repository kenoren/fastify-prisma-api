import Fastify from "fastify"
import { prisma } from "./prisma"
import {userRoutes} from "./routes/UserRoutes";
import {postRoutes} from "./routes/PostRoutes";
import {errorHandler} from "./plugins/errorHandler";

const app = Fastify({ logger: true })

userRoutes(app)
postRoutes(app)

app.register(errorHandler)

app.listen({ port: 3000 }, () => {
    console.log("Server running on http://localhost:3000")
})