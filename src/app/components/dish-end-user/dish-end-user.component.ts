import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dish } from '../../models/dish.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dish-end-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-end-user.component.html',
  styleUrls: ['./dish-end-user.component.css']
})
export class DishEndUserComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params['restaurantId'];

    this.http.get<Dish[]>(`${environment.apiUrl}/dishes/restaurant/${restaurantId}`)
      .subscribe(data => this.dishes = data);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToDashboard() {
    this.router.navigate(['/user-dashboard']);
  }

  addToCart(dish: Dish) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: Dish) => item.id === dish.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...dish, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${dish.name} added to cart!`);
  }
  
  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
  
}

