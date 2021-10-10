import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUser } from "../interface/ICreateUser";
import { IUserRepository } from "../interface/IUserRepository";

class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUser): Promise<ICreateUser> {
    const user = this.userRepository.create({ name, email, password });

    await this.userRepository.save(user);

    return user;
  }

  async save(user: ICreateUser): Promise<ICreateUser> {
    await this.userRepository.save(user);
    
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: {
        id
      }
    })

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: {
        email
      }
    })

    return user;;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async deleteClient(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
  
}

export { UserRepository }