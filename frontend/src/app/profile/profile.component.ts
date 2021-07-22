import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
