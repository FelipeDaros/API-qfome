import { inject, injectable } from "tsyringe";
import { Plate } from "../../entities/Plate";
import { PlateRepository } from "../../repositories/PlateRepository";

@injectable()
class FindAllPlatesService {
  constructor(
    @inject("PlateRepository")
    private plateRepository: PlateRepository,
  ) { }

  async findAllPlates(): Promise<Plate[]> {
    const plates = await this.plateRepository.findAll();

    return plates;
  }
}

export { FindAllPlatesService }  