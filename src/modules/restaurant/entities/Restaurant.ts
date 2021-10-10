import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Plate } from "../../plate/entities/Plate";

@Entity("restaurant")
class Restaurant {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Plate, plate => plate.restaurant, {eager: true})
  @JoinColumn({ name: "plates" })
  plates: Plate[]

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Restaurant }