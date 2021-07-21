import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';
import { donation, personalnfo, donationType } from '../donationClass';

@Component({
  selector: 'app-donation-type',
  templateUrl: './donation-type.component.html',
  styleUrls: ['./donation-type.component.css']
})
export class DonationTypeComponent implements OnInit {
  dtlist:any;
  errorMsg:any;
  constructor(private router: Router, private donationService: DonationService) { 
  }

  ngOnInit(): void {
    this.donationService.getDonationType().subscribe(
      (data)=> {this.dtlist = data;
                console.log(data)},
      (error)=> this.errorMsg = error,
      () => console.log("Completed"))
  }
  //typeList: string[]=["Type A", "Type B", "Type C", "Type D" ];
  
  sendType(argType:string){
    this.donationService.setType(argType);
    this.router.navigate(["/personInfo"]);
  }
}
