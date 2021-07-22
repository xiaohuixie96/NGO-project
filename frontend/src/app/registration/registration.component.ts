import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

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
  }

}
