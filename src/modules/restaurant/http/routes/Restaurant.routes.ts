import { Router } from "express";
import { RestaurantController } from "../controllers/RestaurantController";
const restaurantRouter = Router();

const restaurantController = new RestaurantController(); 

restaurantRouter.get("/", restaurantController.findAll);
restaurantRouter.post("/", restaurantController.createRestaurant);
restaurantRouter.delete("/:id", restaurantController.delete);


export { restaurantRouter }