import {FastifyInstance} from "fastify";
import {commentController} from "../controllers/CommentController";


export async function commentRoutes(app: FastifyInstance) {
    app.post("/comments", commentController.createComment)
    app.get("/comments", commentController.getAllComments)
    app.delete("/comments/:id", commentController.deleteComment)

}