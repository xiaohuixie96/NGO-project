import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-type',
  templateUrl: './donation-type.component.html',
  styleUrls: ['./donation-type.component.css']
})
export class DonationTypeComponent implements OnInit {
  
  constructor(private router: Router, private donationService: DonationService) { }

  ngOnInit(): void {
  }
  typeList: string[]=["Type A", "Type B", "Type C", "Type D" ];
  
  sendType(argType:string){
    this.donationService.setType(argType);
    this.router.navigate(["/personInfo"]);
  }
}
