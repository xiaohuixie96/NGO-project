import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { donation } from '../donationClass';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  donationList: donation[] = [];
  total:number = 0;
  showDonationList: any;
  errorMsg:any;
  //shoppingCart: { [type: string]: [number, number] } = {};
  //shoppingCart: { [type: string]: number } = {};
  constructor(private router: Router, private donationService: DonationService) { 
    
  }

  ngOnInit(): void {
    this.donationService.donationListBS.subscribe(dlist => {
      this.donationList = dlist;
      /*
      for(let donation of this.donationList){
        if(donation.donationType in this.shoppingCart){
          this.shoppingCart[donation.donationType][0]++;
        }
        else{
          this.shoppingCart[donation.donationType]=[0, 0];
        }
        this.shoppingCart[donation.donationType][1]=this.shoppingCart[donation.donationType][1]+donation.amount;
      }
      */
      for(let donation of this.donationList){
        this.total = +this.total + +donation.Amount;
      }

    });
  }
  onClick(){
    
    for(let d of this.donationList) {
      //console.log(d);
      //this.donationService.postDonation(d);
      this.donationService.postDonation(d).subscribe(
        (data) => {this.showDonationList = data;
          this.donationService.getDonation().subscribe(
            (data) => this.showDonationList = data,
            (error) => this.errorMsg = error
          )
        },
      (error) => this.errorMsg = error
    );
    }
    
    this.donationService.resetDonationList();
  }

}
