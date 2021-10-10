import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Restaurant } from "../../restaurant/entities/Restaurant";


@Entity("plate")
class Plate {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  photo_plate: string;

  @Column()
  status: boolean;

  @Column()
  price: number;

  @ManyToOne(() => Restaurant, restaurant => restaurant.id)
  @JoinColumn({name: "restaurant_id"})
  restaurant: Restaurant;

  @Column()
  restaurant_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Plate }