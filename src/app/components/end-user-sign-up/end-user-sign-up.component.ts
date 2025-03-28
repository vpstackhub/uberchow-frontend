import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-end-user-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './end-user-sign-up.component.html',
  styleUrls: ['./end-user-sign-up.component.css']
})
export class EndUserSignUpComponent {
  user = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    creditCardNumber: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  signUp() {
    this.http.post('http://localhost:8080/api/auth/user/signup', this.user)
      .subscribe({
        next: () => {
          alert('Signup successful! Please login.');
          this.router.navigate(['/user-login']);
        },
        error: () => {
          alert('Signup failed. Please try again.');
        }
      });
  }
}

