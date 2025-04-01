import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  signUp() {
    this.http.post<any>(`${environment.apiUrl}/auth/user/signup`, this.user)
      .subscribe({
        next: (response) => {
          this.authService.login(response); // Store user in localStorage
          alert('Signup successful!');

          const redirect = this.route.snapshot.queryParamMap.get('redirect');
          this.router.navigate([redirect || '/user-dashboard']);
        },
        error: () => {
          alert('Signup failed. Please try again.');
        }
      });
  }
}


