import { Restaurant } from "../entities/Restaurant";
import { ICreateRestaurant } from "./ICreateRestaunt";


interface IRestaurantRepository {
  create({ name }: ICreateRestaurant): Promise<ICreateRestaurant>;
  save(restaurant: ICreateRestaurant): Promise<ICreateRestaurant>;
  findById(id: string): Promise<Restaurant | undefined>;
  findByName(name: string): Promise<Restaurant | undefined>;
  findAll(): Promise<Restaurant[]>;
  deleteRestaurant(id: string): Promise<void>;
}

export { IRestaurantRepository } 