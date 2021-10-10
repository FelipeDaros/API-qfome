import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePlateService } from "../services/CreatePlateService";
import { FindAllPlatesService } from "../services/FindAllPlatesService";


class PlateController {
  async createPlate(request: Request, response: Response): Promise<Response> {
    const { name, description, restaurant_id, price} = request.body;
    const photo_plate = request.file?.filename;

    const createPlate = container.resolve(CreatePlateService);

    const plate = await createPlate.createPlate({
      name, description, restaurant_id, photo_plate, price
    });

    return response.status(201).json(plate);
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const findAll = container.resolve(FindAllPlatesService);

    const plates = await findAll.findAllPlates();

    return response.status(200).json(plates);
  }
}

export { PlateController }