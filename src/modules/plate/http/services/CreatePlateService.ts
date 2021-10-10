import { inject, injectable } from "tsyringe"
import AppError from "../../../../shared/infra/errors/AppError";
import { RestaurantRepository } from "../../../restaurant/repositories/RestaurantRepository";
import { ICreatePlate } from "../../interface/ICreatePlate"
import { PlateRepository } from "../../repositories/PlateRepository"

@injectable()
class CreatePlateService {
 constructor(
    @inject("PlateRepository")
    private plateRepository: PlateRepository,
    @inject("RestaurantRepository")
    private restaurantRepository: RestaurantRepository
  ) { }

  async createPlate({ name, description, restaurant_id, photo_plate, price }: ICreatePlate): Promise<ICreatePlate> {
    const plateExists = await this.plateRepository.findByName(name);
    const restaurantExists = await this.restaurantRepository.findById(restaurant_id);

    if (plateExists) {
      throw new AppError("Plate is name exists!");
    }

    if (!restaurantExists) {
      throw new AppError("Restaurant not exists!");
    }

    const plate = await this.plateRepository.create({
      name,
      description,
      restaurant_id,
      photo_plate,
      price
    });

    return plate;
  }
}

export { CreatePlateService }