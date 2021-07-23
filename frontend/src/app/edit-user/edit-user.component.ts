import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { }

  public userId: any;
  public user: any;
  public errorMsg: any;
  public users: any;

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
      this.user = this.userService.getUserById(this.userId).subscribe(
        (data) => {this.user = data; },
        (error) => {this.errorMsg = error;  }
      );
    }); 
  }

  edit(id: any, user: any){
    this.userService.updateUser(this.userId, this.user).subscribe(
      (data) => {this.user = data; console.log(data);
        this.userService.getUsers().subscribe(
          (data) => this.users = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => {this.errorMsg = error;  }
    );   
    this.router.navigate(['/usermanagement'],{ relativeTo: this.actRoute, queryParamsHandling: 'preserve' });
  }
  goBack(){
    this.router.navigate(['/usermanagement']);
  }
}
