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
  //typeList: string[]=["Type A", "Type B", "Type C", "Type D" ];
  typeList: any;
  errorMsg: any;
  numOfType: number = 0;
  typeDict: { [type: string]: boolean } = {};
  amountDict: { [type: string]: number } = {};
  constructor(private router: Router, private donationService: DonationService) { 
    this.donationService.getDonationType().subscribe(
      (data)=> {this.typeList = data;
                //console.log(data);
                //console.log("get data:");
                //console.log(this.typeList);
                for (let type in this.typeList) {
                  //console.log(this.typeList[type].type);
                  this.numOfType++;
                  if (this.typeList[type].type === this.selectedType){
                    this.typeDict[this.typeList[type].type]=true;
                  }
                  else{
                    this.typeDict[this.typeList[type].type]=false;
                  }
                }
                this.typeDict[this.selectedType]=true;

                for (let type in this.typeList) {
                  this.amountDict[this.typeList[type].type]=0;
                }
                
              },
      (error)=> this.errorMsg = error,
      () => console.log("Completed"))
  }

  ngOnInit(): void {
    this.donationService.typeBS.subscribe(t => {
      this.selectedType = t;
      //console.log(this.selectedType );
    });
    
    //this.numOfType = this.typeList.length;
    //console.log(this.selectedType);
    //console.log(this.typeList)
    
  }
  /*
  ngAfterContentInit(): void {
    console.log("this.typeList")
    console.log(this.typeList)
    for (let type in this.typeList) {
      this.numOfType++;
      if (type === this.selectedType){
        this.typeDict[type]=true;
      }
      else{
        this.typeDict[type]=false;
      }
    }
    this.typeDict[this.selectedType]=true;

    for (let type of this.typeList) {
      this.amountDict[type]=0;
    }
  }
  */
  onSubmit(typeAmountForm: any){
    console.log(this.amountDict);
    console.log(this.typeDict);
    this.donationService.saveDonationList(this.typeDict, this.amountDict);
    this.router.navigate(['/shoppingCart']);
  }
  typeOf(value:any) {
    return typeof value;
  }
  
}
