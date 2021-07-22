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

  detail(id: number){
    this.router.navigate(['/usermanagement/view', id])
  }

  edit(id: number){
    this.router.navigate(['usermanagement/edit', id])
  }

  delete(id: number){
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUsers().subscribe(
        (data) => this.users = data,
        (error) => this.errorMsg = error
      )
    })
  }

}
