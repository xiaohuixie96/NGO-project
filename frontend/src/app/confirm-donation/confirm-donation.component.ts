import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';
import { donation } from '../donationClass';

@Component({
  selector: 'app-confirm-donation',
  templateUrl: './confirm-donation.component.html',
  styleUrls: ['./confirm-donation.component.css']
})
export class ConfirmDonationComponent implements OnInit {
  person : any;
  type: any;
  donationList: any;
  constructor(private router: Router, private donationService: DonationService) { }

  ngOnInit(): void {
    this.donationService.personBS.subscribe(data => {
      this.person = data;
    });
    this.donationService.typeBS.subscribe(t => {
      this.type = t;
    });
    this.donationService.donationListBS.subscribe(dlist => {
      this.donationList = dlist;
    });
  }

}
