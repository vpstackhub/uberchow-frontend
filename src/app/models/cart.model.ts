export interface CartItem {
    dishId: number;
    name: string;
    price: number;
    quantity: number;
    picture: string;
  }
  
  export interface Cart {
    items: CartItem[];
    total: number;
  }
  