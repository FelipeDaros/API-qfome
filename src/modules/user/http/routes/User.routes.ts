import { Router } from "express";
import { UserController } from "../controller/UserController";
const userRouter = Router();

const userController = new UserController();

userRouter.get("/", userController.findAllUsers);
userRouter.post("/", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);


export { userRouter }