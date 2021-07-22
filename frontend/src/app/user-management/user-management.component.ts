import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  Users: any;

  ngOnInit(): void {
    this.token.getUser();
  }

}
