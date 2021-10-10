import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";


@injectable()
class FindAllUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) { }

  async findAll(): Promise<User[]> {
    const user = await this.userRepository.findAll();
    
    return user;
  }
}

export { FindAllUsersService }