import { getRepository, Repository } from "typeorm";
import { Order } from "../entities/Order";
import { ICreateOrder } from "../interface/ICreateOrder";
import { IOrderRepository } from "../interface/IOrderRepository";


class OrderRepository implements IOrderRepository {
  private orderRepository: Repository<Order>;

  constructor() {
    this.orderRepository = getRepository(Order);
  }

  async create({ estimated_time, plate_id, price_total, user_id }: ICreateOrder): Promise<ICreateOrder> {
    const order = this.orderRepository.create({
      estimated_time,
      plate_id,
      price_total,
      user_id,
    });

    await this.orderRepository.save(order);

    return order;
  }

  

  async save(order: ICreateOrder): Promise<ICreateOrder> {
    await this.orderRepository.save(order);

    return order;
  }
  
  async findById(id: string): Promise<Order | undefined> {
    const order = await this.orderRepository.findOne({
      where: {
        id
      }
    });

    return order;
  }

  async findAll(): Promise<Order[]> {
    const orders = await this.orderRepository.find();

    return orders;
  }

  async deleteOrder(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }
  
}


export { OrderRepository } 