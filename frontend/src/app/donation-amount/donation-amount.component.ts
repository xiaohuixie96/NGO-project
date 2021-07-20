import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-amount',
  templateUrl: './donation-amount.component.html',
  styleUrls: ['./donation-amount.component.css']
})
export class DonationAmountComponent implements OnInit {
  selectedType: any;
  typeList: string[]=["Type A", "Type B", "Type C", "Type D" ];
  typeDict: { [type: string]: boolean } = {};
  amountDict: { [type: string]: number } = {};
  constructor(private router: Router, private donationService: DonationService) { 
  }

  ngOnInit(): void {
    this.donationService.typeBS.subscribe(t => {
      this.selectedType = t;
    });
    //console.log(this.selectedType);
    for (let type of this.typeList) {
      if (type === this.selectedType){
        this.typeDict[type]=true;
      }
      else{
        this.typeDict[type]=false;
      }
    }
    this.typeDict[this.selectedType]=true;

    for (let type of this.typeList) {
      this.amountDict[type]=-1;
    }
  }

  onSubmit(typeAmountForm: any){
    console.log(this.amountDict);
    console.log(this.typeDict);
    this.donationService.saveDonationList(this.typeDict, this.amountDict);
    this.router.navigate(['/shoppingCart']);
  }

}
