import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { BuyingComponent } from './buying/buying.component';
import { SellingComponent } from './selling/selling.component';
import { CartComponent } from './cart/cart.component';
import { GreetingComponent } from './greeting/greeting.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    BuyingComponent,
    SellingComponent,
    CartComponent,
    GreetingComponent,
    EdituserComponent
    UserlistComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
