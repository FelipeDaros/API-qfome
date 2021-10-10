import { Plate } from "../entities/Plate";
import { ICreatePlate } from "./ICreatePlate";


interface IPlateRepository {
  create({ description, name, restaurant_id, price, photo_plate }: ICreatePlate): Promise<ICreatePlate>;
  save(plate: ICreatePlate): Promise<ICreatePlate>;
  findById(id: string): Promise<Plate | undefined>;
  findByIds(id: Plate[]): Promise<Plate[] | undefined>;
  findByName(name: string): Promise<Plate | undefined>;
  findAll(): Promise<Plate[]>;
  deletePlate(id: string): Promise<void>;
}

export { IPlateRepository }