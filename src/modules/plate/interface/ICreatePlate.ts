

export interface ICreatePlate {
  name: string;
  description: string;
  photo_plate?: string;
  status?: boolean;
  restaurant_id: string;
  price: number;
}