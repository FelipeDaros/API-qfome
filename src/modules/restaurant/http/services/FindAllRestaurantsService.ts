import { inject, injectable } from "tsyringe"
import { Restaurant } from "../../entities/Restaurant"
import { RestaurantRepository } from "../../repositories/RestaurantRepository"

@injectable()
class FindAllRestaunrantsService {
 constructor(
    @inject("RestaurantRepository")
    private restaurantRepository: RestaurantRepository
  ) { }
  
  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantRepository.findAll();

    return restaurants;
  }
}

export { FindAllRestaunrantsService }