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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AddUserComponent } from './add-user/add-user.component';


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
    DonationAmountComponent,
    NavbarComponent,
    ShoppingCartComponent,
    TransactionComponent,
    ProfileComponent,
    EditUserComponent,
    UserdetailComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MDBBootstrapModule,
    RouterModule,
    MatToolbarModule,
    NgbModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
