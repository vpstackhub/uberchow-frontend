import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Restaurant } from '../../models/restaurant.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-restaurant-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant-admin.component.html',
  styleUrls: ['./restaurant-admin.component.css']
})
export class RestaurantAdminComponent implements OnInit {
  restaurants: Restaurant[] = [];
  newRestaurant: Partial<Restaurant> = {};
  editingRestaurant: Restaurant | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.http.get<Restaurant[]>(`${environment.apiUrl}/restaurants`)
      .subscribe(data => this.restaurants = data);
  }

  addRestaurant() {
    this.http.post<Restaurant>(`${environment.apiUrl}/restaurants`, this.newRestaurant)
      .subscribe(() => {
        this.loadRestaurants();
        this.newRestaurant = {};
      });
  }

  editRestaurant(restaurant: Restaurant) {
    this.editingRestaurant = { ...restaurant };
  }

  updateRestaurant() {
    if (this.editingRestaurant?.id) {
      this.http.put(`${environment.apiUrl}/restaurants/${this.editingRestaurant.id}`, this.editingRestaurant)
        .subscribe(() => {
          this.loadRestaurants();
          this.editingRestaurant = null;
        });
    }
  }

  deleteRestaurant(id: number) {
    this.http.delete(`${environment.apiUrl}/restaurants/${id}`)
      .subscribe(() => this.loadRestaurants());
  }

  cancelEdit() {
    this.editingRestaurant = null;
  }
}

