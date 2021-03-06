import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';
import { CartComponent } from './cart/cart.component';
import { GreetingComponent } from './greeting/greeting.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { EdituserComponent } from './edituser/edituser.component';
import { SellingHomeComponent } from './selling-home/selling-home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buying', component: BuyingComponent },
  { path: 'selling', component: SellingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: 'edit', component: EdituserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'sellinghome', component: SellingHomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
