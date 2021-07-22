import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { Router } from '@angular/router';
import { donation, personalnfo } from '../donationClass';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-donation',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  type: any;
  errorMsg: any;
  public personModel = new personalnfo();
  constructor(private router: Router, private donationService: DonationService,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.donationService.typeBS.subscribe(t => {
      this.type = t;
    });
  }

  onSubmit(personForm: any){
    //console.log(this.donationModel);
    this.donationService.savePersonalnfo(this.personModel);
    this.router.navigate(['/donationAmount']);
  }

}
