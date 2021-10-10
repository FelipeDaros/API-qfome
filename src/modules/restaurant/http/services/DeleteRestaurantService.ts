import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/infra/errors/AppError";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";


@injectable()
class DeleteRestauntService{
  constructor(
    @inject("RestaurantRepository")
    private restaurantRepository: RestaurantRepository
  ) { }
  async delete(id: string): Promise<void> {
    const restaurant = await this.restaurantRepository.findById(id);
    
    if (!restaurant) {
      throw new AppError("Restaurant not exists!");
    }

    if (restaurant.status === false) {
      throw new AppError("Restaurant is now available!");
    }

    await this.restaurantRepository.deleteRestaurant(id);
    
  }
}

export { DeleteRestauntService }