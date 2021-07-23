import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user-service.service';

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
 

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void 
  {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      
      this.userService.getUserById(user.user_id).subscribe(
        (data) => {
          this.currentuser = data;  
          if(this.currentuser.is_superuser)
          {
            this.showAdminBoard = true;
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
  }

}
