import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/infra/errors/AppError";
import { ICreateRestaurant } from "../../interface/ICreateRestaunt";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

@injectable()
class CreateRestaurantService {
  constructor(
    @inject("RestaurantRepository")
    private restaurantRepository: RestaurantRepository
  ) { }
  async create({ name }: ICreateRestaurant): Promise<ICreateRestaurant> {
    const restaurantExists = await this.restaurantRepository.findByName(name);

    if (restaurantExists) {
      throw new AppError("This restaurant name is already in use!");
    }

    const restaurant = this.restaurantRepository.create({
      name
    });

    return restaurant;
  }
}

export { CreateRestaurantService } 