import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid";
import { Plate } from "../../plate/entities/Plate";
import { User } from "../../user/entities/User";

@Entity("order")
class Order {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: "user_id"})
  user: User;

  @Column()
  user_id: string;

  @OneToMany(() => Plate, plate => plate.id)
  @JoinColumn({name: "plate_id"})
  plate: Plate[];

  @Column("uuid", { array: true })
  plate_id: string[]

  @Column({type: "integer"})
  price_total: number;

  @Column()
  estimated_time: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order }