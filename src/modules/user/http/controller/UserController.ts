import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { FindAllUsersService } from "../services/FindAllUsersService";


class UserController {
  async createUser(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    await createUser.createUser({
      name,
      email,
      password
    });

    return response.status(201).json({ message: "User created!" });
  }

  async findAllUsers(request: Request, response: Response): Promise<Response> {
    const findUsers = container.resolve(FindAllUsersService);

    const users = await findUsers.findAll();

    return response.status(200).json(users);
  }

  async deleteUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.deleteUser(id);

    return response.status(200).json({ message: "User deleted!" })
  }
}

export { UserController }