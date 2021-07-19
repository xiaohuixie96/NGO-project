import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonationTypeComponent } from './donation-type/donation-type.component';
import { ConfirmDonationComponent } from './confirm-donation/confirm-donation.component';
import { MatCardModule } from '@angular/material/card'; 
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonationAmountComponent } from './donation-amount/donation-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserManagementComponent,
    PersonComponent,
    HomeComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    DonationTypeComponent,
    ConfirmDonationComponent,
    DonationAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
