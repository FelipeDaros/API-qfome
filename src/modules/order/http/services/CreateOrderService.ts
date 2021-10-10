import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/infra/errors/AppError";
import { PlateRepository } from "../../../plate/repositories/PlateRepository";
import { UserRepository } from "../../../user/repositories/UserRepository";
import { ICreateOrder } from "../../interface/ICreateOrder";
import { OrderRepository } from "../../repositories/OrderRepository";

@injectable()
class CreateOrderSerice {
  constructor(
    @inject("OrderRepository")
    private orderRepository: OrderRepository,
    @inject("PlateRepository")
    private plateRepository: PlateRepository,
    @inject("UserRepository")
    private userRepository: UserRepository,
  ) { }
  async createOrder({ estimated_time, plate_id, user_id }: ICreateOrder): Promise<ICreateOrder> {
    const userExists = await this.userRepository.findById(user_id);
    const plateExists = await this.plateRepository.findByIds(plate_id);
    
    const prices = plateExists?.reduce((acumulator, item, index) => {
      return acumulator + item.price
    }, 0);

    

    console.log(prices)
 
    if (!userExists) {
      throw new AppError("User not exists!");
    }

    if (!plateExists) {
      throw new AppError("Plate not exists!");
    }

    const order = this.orderRepository.create({
      estimated_time,
      plate_id,
      price_total: prices,
      user_id
    })

    return order;
  }
}

export { CreateOrderSerice } 