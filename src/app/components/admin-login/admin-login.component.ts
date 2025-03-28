import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-admin-login',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/api/auth/admin/login', body)
    .subscribe({
    next: (response) => {
      console.log('Logged in admin:', response); 
      localStorage.setItem('admin', JSON.stringify(response)); 
      alert('Login successful!');
      this.router.navigate(['/admin-dashboard']);
    },
    error: (err) => {
      alert('Invalid credentials!');
    }
  });

  }
}
