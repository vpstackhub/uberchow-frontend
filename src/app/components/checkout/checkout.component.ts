import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cardNumber = '';
  expiration = '';
  cvv = '';
  userId!: number;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (!user) {
      alert('Please login to proceed to checkout.');
      this.router.navigate(['/user-login']);
      return;
    }

    this.userId = JSON.parse(user).id;
  }

  onSubmitPayment() {
    const order = {
      userId: this.userId,
      status: 'CONFIRMED',
      totalAmount: 49.99 // Dummy total for now
    };

    this.http.post('http://localhost:8080/api/orders', order).subscribe({
      next: () => {
        this.router.navigate(['/confirmation-payment']);
      },
      error: () => alert('Failed to place order.')
    });
  }
}


