import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    is_superuser: false
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, password, first_name, last_name, email, is_superuser} = this.form;

    this.auth.register(username, password,
      first_name, last_name, email, is_superuser
      ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
  );
  this.router.navigate(['/usermanagement']);
}

goBack(){
  this.router.navigate(['/usermanagement']);
}
}
