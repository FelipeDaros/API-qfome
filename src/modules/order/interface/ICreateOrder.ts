import { Plate } from "../../plate/entities/Plate";


export interface ICreateOrder {
  user_id: string;
  plate_id: Plate[];
  price_total?: number | undefined;
  estimated_time: string;
}