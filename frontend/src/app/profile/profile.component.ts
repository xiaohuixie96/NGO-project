import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private userService: UserService) { }
  public ifDonated = false;
  user: any;
  errorMsg: any;
  public role = 'User';

  ngOnInit(): void {
      const user = this.tokenStorageService.getUser();
      this.userService.getUserById(user.user_id).subscribe(
        (data) => {
          this.user = data; 
          if(this.user.is_superuser)
          {
            this.role = 'Admin'
          } 
          
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
      
    }
}


