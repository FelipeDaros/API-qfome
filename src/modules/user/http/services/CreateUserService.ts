import { hashSync } from "bcrypt";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/infra/errors/AppError";
import { ICreateUser } from "../../interface/ICreateUser";
import { UserRepository } from "../../repositories/UserRepository";


@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) { }

  async createUser({ email, name, password }: ICreateUser): Promise<ICreateUser> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("User already registered, please inform another email!");
    }

    const hashPassword = hashSync(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashPassword
    });

    return user;
  }
}

export { CreateUserService }