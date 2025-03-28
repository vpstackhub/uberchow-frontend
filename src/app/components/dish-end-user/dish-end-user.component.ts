import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-dish-end-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dish-end-user.component.html',
  styleUrls: ['./dish-end-user.component.css']
})
export class DishEndUserComponent implements OnInit {
  dishes: Dish[] = [];
  restaurantId!: number;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('restaurantId'));
    if (this.restaurantId) {
      this.loadDishes();
    }
  }

  loadDishes() {
    this.http.get<Dish[]>(`http://localhost:8080/api/dishes/restaurant/${this.restaurantId}`)
      .subscribe(data => this.dishes = data);
  }

  addToCart(dish: Dish) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ ...dish, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${dish.name} added to cart!`);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToDashboard() {
    this.router.navigate(['/user-dashboard']);
  }

  goToCheckout() {
    this.router.navigate(['/cart']);
  }
  
}

