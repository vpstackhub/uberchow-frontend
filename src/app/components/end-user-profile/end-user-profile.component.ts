import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './end-user-profile.component.html',
  styleUrls: ['./end-user-profile.component.css']
})
export class EndUserProfileComponent implements OnInit {
  user: any = {};
  userId!: number;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('Please login first.');
      this.router.navigate(['/user-login']);
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    this.userId = parsedUser.id;

    this.http.get(`http://localhost:8080/api/users/${this.userId}`)
      .subscribe({
        next: (data: any) => this.user = data,
        error: () => alert('Failed to load user data.')
      });
  }

  updateProfile() {
    this.http.put(`http://localhost:8080/api/users/${this.userId}`, this.user)
      .subscribe({
        next: () => alert('Profile updated successfully.'),
        error: () => alert('Failed to update profile.')
      });
  }
}

