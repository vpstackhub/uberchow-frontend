import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-end-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './end-user-login.component.html',
  styleUrls: ['./end-user-login.component.css']
})
export class EndUserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  loginUser() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>(`${environment.apiUrl}/auth/user/login`, credentials).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response));
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



