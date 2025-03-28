export interface Dish {
    id?: number;
    name: string;
    description: string;
    price: number;
    picture: string;       
    restaurantId: number;
    createdOn?: string;
  }
  