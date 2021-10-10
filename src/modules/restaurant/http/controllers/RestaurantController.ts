import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRestaurantService } from "../services/CreateRestaurantService";
import { DeleteRestauntService } from "../services/DeleteRestaurantService";
import { FindAllRestaunrantsService } from "../services/FindAllRestaurantsService";


class RestaurantController {
  async createRestaurant(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createRestaurant = container.resolve(CreateRestaurantService);

    const create = await createRestaurant.create({name});

    return response.status(201).json(create);
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const findAllRestaurants = container.resolve(FindAllRestaunrantsService);

    const restaurants = await findAllRestaurants.findAll();

    return response.status(200).json(restaurants);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteService = container.resolve(DeleteRestauntService);

    await deleteService.delete(id);

    return response.status(200).json({ message: "Restaurant deleted!" });
  }
}

export { RestaurantController }