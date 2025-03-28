import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-end-user-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './end-user-dashboard.component.html',
  styleUrls: ['./end-user-dashboard.component.css']
})
export class EndUserDashboardComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
