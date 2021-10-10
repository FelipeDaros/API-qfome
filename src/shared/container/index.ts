import { container } from "tsyringe";
import { IOrderRepository } from "../../modules/order/interface/IOrderRepository";
import { OrderRepository } from "../../modules/order/repositories/OrderRepository";
import { IPlateRepository } from "../../modules/plate/interface/IPlateRepository";
import { PlateRepository } from "../../modules/plate/repositories/PlateRepository";
import { IRestaurantRepository } from "../../modules/restaurant/interface/IRestaurantRepository";
import { RestaurantRepository } from "../../modules/restaurant/repositories/RestaurantRepository";
import { IUserRepository } from "../../modules/user/interface/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/UserRepository";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)

container.registerSingleton<IRestaurantRepository>(
  "RestaurantRepository",
  RestaurantRepository
)

container.registerSingleton<IPlateRepository>(
  "PlateRepository",
  PlateRepository
)

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
)