import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-end-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-end-user.component.html',
  styleUrls: ['./restaurant-end-user.component.css']
})
export class RestaurantEndUserComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Restaurant[]>('http://localhost:8080/api/restaurants')
      .subscribe(data => this.restaurants = data);
  }

  viewDishes(restaurantId: number) {
    this.router.navigate(['/dishes', restaurantId]);
  }

  goToDashboard() {
    this.router.navigate(['/user-dashboard']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}


