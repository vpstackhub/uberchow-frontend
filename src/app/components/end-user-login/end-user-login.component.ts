import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-end-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './end-user-login.component.html',
  styleUrls: ['./end-user-login.component.css']
})
export class EndUserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  loginUser() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>(`${environment.apiUrl}/users/end-user-login`, credentials).subscribe({
      next: (response) => {
        this.authService.login(response); 
        alert('Login successful!');

        const redirect = this.route.snapshot.queryParamMap.get('redirect');
        this.router.navigate([redirect || '/user-dashboard']);
      },
      error: () => {
        alert('Invalid login. Please try again.');
      }
    });
  }
}




