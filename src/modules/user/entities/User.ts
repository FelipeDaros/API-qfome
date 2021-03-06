import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("user")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  permission: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.permission = false;
    }
  }
}

export { User }