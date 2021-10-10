import { Router } from "express";
import { OrderController } from "../controllers/PlateController";


const orderRouter = Router();

const orderController = new OrderController();


orderRouter.post("/", orderController.create);

export { orderRouter } 