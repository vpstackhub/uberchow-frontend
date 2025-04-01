import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  cardNumber: string = '';
  expiration: string = '';
  cvv: string = '';
  userId: number | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url === '/checkout') {
          this.initializeCheckout();
        }
      });
  }

  get isUserLoggedIn(): boolean {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return !!user && !!user.id;
    } catch {
      return false;
    }
  }

  ngOnInit(): void {
    this.initializeCheckout();
  }

  initializeCheckout(): void {
    const user = this.authService.getUser();
  
    console.log('[Checkout] User data from AuthService:', user);
  
    if (!user || typeof user.id !== 'number') {
      console.log('[Checkout] No valid user. Redirecting to login...');
      this.authService.logout();
      this.userId = null;
      this.cartItems = [];
      this.totalPrice = 0;
  
      this.router.navigate(['/user-login'], {
        queryParams: { redirect: '/checkout' }
      });
      return;
    }
  
    this.userId = user.id;
    const cart = localStorage.getItem('cart');
    this.cartItems = cart ? JSON.parse(cart) : [];
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }  
  
  placeOrder(): void {
    if (!this.userId) {
      alert('You must be logged in to place an order.');
      this.router.navigate(['/user-login'], {
        queryParams: { redirect: '/checkout' }
      });
      return;
    }

    const order = {
      userId: this.userId,
      items: this.cartItems,
      totalPrice: this.totalPrice,
      cardNumber: this.cardNumber,
      expiration: this.expiration,
      cvv: this.cvv
    };

    this.http.post(`${environment.apiUrl}/orders`, order).subscribe(() => {
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      this.router.navigate(['/confirmation-payment']);
    });
  }
}






