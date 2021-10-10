import { getRepository, Repository } from "typeorm";
import { Plate } from "../entities/Plate";
import { ICreatePlate } from "../interface/ICreatePlate";
import { IPlateRepository } from "../interface/IPlateRepository";


class PlateRepository implements IPlateRepository {
  private plateRepository: Repository<Plate>;
  
  constructor() {
    this.plateRepository = getRepository(Plate)
  }

  async findByIds(id: Plate[]): Promise<Plate[] | undefined> {
    const plates = await this.plateRepository.findByIds(id);

    return plates;
  }

  async findByName(name: string): Promise<Plate | undefined> {
    const plate = this.plateRepository.findOne({
      where: {
        name
      }
    })

    return plate;
  }

  async create({ description, name, restaurant_id, photo_plate, price }: ICreatePlate): Promise<ICreatePlate> {
    const plate = this.plateRepository.create({ description, name, restaurant_id, photo_plate, price });

    await this.plateRepository.save(plate);

    return plate;
  }

  async save(plate: ICreatePlate): Promise<ICreatePlate> {
    await this.plateRepository.save(plate);

    return plate;
  }

  async findById(id: string): Promise<Plate | undefined> {
    const plate = await this.plateRepository.findOne({
      where: {
        id
      }
    });

    return plate;
  }

  async findAll(): Promise<Plate[]> {
    const plates = await this.plateRepository.find({
      where: {
        status: true
      },
      relations: ["restaurant"]
    })

    return plates;
  }

  async deletePlate(id: string): Promise<void> {
    await this.plateRepository.delete(id);
  }

  
}

export { PlateRepository } 