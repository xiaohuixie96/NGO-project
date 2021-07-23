import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user-service.service';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  public showAdminBoard = false;
  public username?: string;
  public currentuser: any;
  public errorMsg: any;
 

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService, private authService: AuthServiceService) { }

  ngOnInit(): void 
  {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.authService.setLoginTrue();
      this.userService.getUserById(user.user_id).subscribe(
        (data) => {
          this.currentuser = data;  
          if(this.currentuser.is_superuser)
          {
            //console.log("is admin");
            
            this.authService.setAdminTrue();
            console.log(this.authService.isAdminUser());
            this.showAdminBoard = true;
          }else{
            this.authService.setAdminFalse();
          }
          this.username = this.currentuser.username;
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
      
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.authService.setLoginFalse();
  }

}
