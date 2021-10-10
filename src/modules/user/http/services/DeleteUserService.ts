import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/infra/errors/AppError";
import { UserRepository } from "../../repositories/UserRepository";


@injectable()
class DeleteUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: UserRepository
  ) { }

  async deleteUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User no longer exists");
    }

    await this.userRepository.deleteClient(id);
  }
}

export { DeleteUserService }