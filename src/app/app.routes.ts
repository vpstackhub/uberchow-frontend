import { Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CityAdminComponent } from './components/city-admin/city-admin.component';
import { RestaurantAdminComponent } from './components/restaurant-admin/restaurant-admin.component';
import { DishAdminComponent } from './components/dish-admin/dish-admin.component';
import { EndUserDashboardComponent } from './components/end-user-dashboard/end-user-dashboard.component';
import { RestaurantEndUserComponent } from './components/restaurant-end-user/restaurant-end-user.component';
import { DishEndUserComponent } from './components/dish-end-user/dish-end-user.component';
import { CartComponent } from './components/cart/cart.component';
import { EndUserLoginComponent } from './components/end-user-login/end-user-login.component';
import { EndUserSignUpComponent } from './components/end-user-sign-up/end-user-sign-up.component';
import { ConfirmationPaymentComponent } from './components/confirmation-payment/confirmation-payment.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin/cities', component: CityAdminComponent },
  { path: 'admin/restaurants', component: RestaurantAdminComponent },
  { path: 'admin/dishes', component: DishAdminComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'user-dashboard', component: EndUserDashboardComponent },
  { path: 'user-restaurants', component: RestaurantEndUserComponent },
  { path: 'dishes/:restaurantId', component: DishEndUserComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user-login', component: EndUserLoginComponent },
  { path: 'user-sign-up', component: EndUserSignUpComponent },
  { path: 'confirmation-payment', component: ConfirmationPaymentComponent },

  
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' }
];



