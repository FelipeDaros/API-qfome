import { Order } from "../entities/Order";
import { ICreateOrder } from "./ICreateOrder";

export interface IOrderRepository {
  create({ estimated_time, plate_id, price_total, user_id }: ICreateOrder): Promise<ICreateOrder>;
  save(order: ICreateOrder): Promise<ICreateOrder>;
  findById(id: string): Promise<Order | undefined>;
  findAll(): Promise<Order[]>;
  deleteOrder(id: string): Promise<void>;
}