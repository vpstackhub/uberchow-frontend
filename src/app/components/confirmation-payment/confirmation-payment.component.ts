import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation-payment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmation-payment.component.html',
  styleUrls: ['./confirmation-payment.component.css']
})
export class ConfirmationPaymentComponent {
  constructor(private router: Router) {}

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToDashboard() {
    this.router.navigate(['/user-dashboard']);
  }
}

