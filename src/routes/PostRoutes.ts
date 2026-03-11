import { FastifyInstance } from "fastify"
import {postController} from "../controllers/PostController";

export async function postRoutes(app: FastifyInstance) {

    app.get("/posts", postController.getPosts)

    app.get("/posts/:id", postController.getPostById)

    app.put("/posts/:id", postController.updatePostById)

    app.delete("/posts/:id", postController.deletePostById)

    app.post("/post", postController.createPost)

}