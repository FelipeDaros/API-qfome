import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrderSerice } from "../services/CreateOrderService";


class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const { estimated_time, plate_id, user_id } = request.body;

    const createOrder = container.resolve(CreateOrderSerice);

    const order = await createOrder.createOrder({
      estimated_time, plate_id, user_id
    });

    return response.status(201).json(order);
  }
}

export { OrderController } 