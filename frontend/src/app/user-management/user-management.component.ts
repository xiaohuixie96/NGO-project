import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})

export class UserManagementComponent implements OnInit {

  constructor(private token: TokenStorageService, private userService: UserService, private router: Router) { }

  public users: any = [];
  public errorMsg: any;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) =>  this.users = data, 
      (error) => this.errorMsg = error,
      () => console.log(this.users)
    );
  }

  detail(user: any){
    console.log(user)
    this.router.navigate(['/viewUser', user.id])
  }

  edit(user: any){
    this.router.navigate(['/editUser', user.id])
  }
  
  reloadPage(): void {
    window.location.reload();
  }

  delete(user: any){
    this.userService.deleteUser(user.id).subscribe(() => {
      this.userService.getUsers().subscribe(
        (data) => this.users = data,
        (error) => this.errorMsg = error
      )
    })
  }

}
