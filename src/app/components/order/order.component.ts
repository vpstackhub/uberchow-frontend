import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  userId: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userId = parsedUser.id;
      this.loadOrders();
    }
  }

  loadOrders(): void {
    if (this.userId) {
      this.http.get<Order[]>(`http://localhost:8080/api/orders/user/${this.userId}`)
        .subscribe(data => this.orders = data);
    }
  }
}
