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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RouteguardGuard } from './services/routeguard.guard';
import { RouteguardAdminGuard } from './services/routeguard-admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'donationtype', component: DonationTypeComponent , canActivate:[RouteguardGuard]},
  { path: 'personInfo', component: PersonComponent , canActivate:[RouteguardGuard]},
  //{ path: 'profile', component: ProfileComponent},
  { path: 'profile', component: ProfileComponent, canActivate:[RouteguardAdminGuard]},
  { path: 'confirmDonation', component: ConfirmDonationComponent, canActivate:[RouteguardGuard] },
  { path: 'donationAmount', component: DonationAmountComponent, canActivate:[RouteguardGuard] },
  { path: 'usermanagement', component: UserManagementComponent, canActivate:[RouteguardAdminGuard]},
  { path: 'viewUser/:id', component: UserdetailComponent , canActivate:[RouteguardAdminGuard]},
  { path: 'editUser/:id', component: EditUserComponent , canActivate:[RouteguardAdminGuard]},
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'transaction', component: TransactionComponent , canActivate:[RouteguardGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[RouteguardAdminGuard]},
  { path: 'addUser', component: AddUserComponent, canActivate:[RouteguardAdminGuard]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
