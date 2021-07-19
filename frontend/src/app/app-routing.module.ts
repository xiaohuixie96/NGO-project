import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDonationComponent } from './confirm-donation/confirm-donation.component';
import { DonationAmountComponent } from './donation-amount/donation-amount.component';
import { DonationTypeComponent } from './donation-type/donation-type.component';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'donationtype', component: DonationTypeComponent },
  { path: 'personInfo', component: PersonComponent },
  { path: 'confirmDonation', component: ConfirmDonationComponent },
  { path: 'donationAmount', component: DonationAmountComponent },
  { path: 'usermanagement', component: UserManagementComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
