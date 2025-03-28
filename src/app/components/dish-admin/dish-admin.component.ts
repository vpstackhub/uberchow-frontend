import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-dish-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dish-admin.component.html',
  styleUrls: ['./dish-admin.component.css']
})
export class DishAdminComponent implements OnInit {
  dishes: Dish[] = [];
  newDish: Partial<Dish> = {};
  editingDish: Dish | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.http.get<Dish[]>('http://localhost:8080/api/dishes')
      .subscribe(data => this.dishes = data);
  }

  addDish() {
    this.http.post<Dish>('http://localhost:8080/api/dishes', this.newDish)
      .subscribe(() => {
        this.loadDishes();
        this.newDish = {};
      });
  }

  editDish(dish: Dish) {
    this.editingDish = { ...dish };
  }

  updateDish() {
    if (this.editingDish?.id) {
      this.http.put(`http://localhost:8080/api/dishes/${this.editingDish.id}`, this.editingDish)
        .subscribe(() => {
          this.loadDishes();
          this.editingDish = null;
        });
    }
  }

  deleteDish(id: number) {
    this.http.delete(`http://localhost:8080/api/dishes/${id}`)
      .subscribe(() => this.loadDishes());
  }

  cancelEdit() {
    this.editingDish = null;
  }
}

