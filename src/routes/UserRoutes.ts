import { FastifyInstance } from "fastify"
import {userController} from "../controllers/UserController";

export async function userRoutes(app: FastifyInstance) {

  app.post("/users", userController.createUser)

  app.get("/users", userController.getUsers)

  app.delete("/users/:id", userController.deleteUser)

  app.put("/users/:id", userController.updateUser )
}