import { getConnection, getRepository, Repository } from "typeorm";
import { Restaurant } from "../entities/Restaurant";
import { ICreateRestaurant } from "../interface/ICreateRestaunt";
import { IRestaurantRepository } from "../interface/IRestaurantRepository";


class RestaurantRepository implements IRestaurantRepository {
  private restaurantRepository: Repository<Restaurant>;

  constructor() {
    this.restaurantRepository = getRepository(Restaurant);
  }

  async findAll(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantRepository.find({
      where: {
        status: true
      },
      //relations: ["plate"]
    })

    return restaurants;
  }
  
  async create({ name }: ICreateRestaurant): Promise<ICreateRestaurant> {
    const restaurant = this.restaurantRepository.create({ name });
    await this.restaurantRepository.save(restaurant);

    return restaurant;
  }

  async save(restaurant: ICreateRestaurant): Promise<ICreateRestaurant> {
    await this.restaurantRepository.save(restaurant);

    return restaurant;
  }

  async findById(id: string): Promise<Restaurant | undefined> {
    const restaurant = await this.restaurantRepository.findOne({
      where: {
        id
      }
    })

    return restaurant;
  }

  async findByName(name: string): Promise<Restaurant | undefined> {
    const restaurant = await this.restaurantRepository.findOne({
      where: {
        name
      }
    })

    return restaurant;
  }

  async deleteRestaurant(id: string): Promise<void> {
    const restaurant = await this.restaurantRepository.findOne({
      where: {
        id
      }
    })

    await getConnection()
      .createQueryBuilder()
      .update(Restaurant)
      .set({ status: false })
      .where("id = :id", {id})
      .execute();
  }
  
}

export { RestaurantRepository }