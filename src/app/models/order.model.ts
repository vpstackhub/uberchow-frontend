export interface OrderDetail {
    id?: number;
    dishId: number;
    quantity: number;
    price: number;
  }
  
  export interface Order {
    id?: number;
    userId: number;
    totalAmount: number;
    createdOn?: string;
    details: OrderDetail[];
  }
  