import { User } from "../entities/User";
import { ICreateUser } from "./ICreateUser";


interface IUserRepository {
  create({ name, email, password }: ICreateUser): Promise<ICreateUser>;
  save(user: ICreateUser): Promise<ICreateUser>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  deleteClient(id: string): Promise<void>;
}

export { IUserRepository }