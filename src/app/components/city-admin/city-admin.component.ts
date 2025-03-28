import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city-admin.component.html',
  styleUrls: ['./city-admin.component.css']
})
export class CityAdminComponent implements OnInit {
  cities: any[] = [];
  newCity = { name: '', country: '' };
  editCity: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.http.get<any[]>('http://localhost:8080/api/cities').subscribe(data => {
      this.cities = data;
    });
  }

  addCity() {
    this.http.post('http://localhost:8080/api/cities', this.newCity).subscribe(() => {
      this.newCity = { name: '', country: '' };
      this.getCities();
    });
  }

  setEditCity(city: any) {
    this.editCity = { ...city };
  }

  updateCity() {
    this.http.put(`http://localhost:8080/api/cities/${this.editCity.id}`, this.editCity).subscribe(() => {
      this.editCity = null;
      this.getCities();
    });
  }

  deleteCity(id: number) {
    this.http.delete(`http://localhost:8080/api/cities/${id}`).subscribe(() => {
      this.getCities();
    });
  }
}

