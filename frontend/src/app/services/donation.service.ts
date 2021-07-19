import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError  } from 'rxjs';
import { donation, personalnfo } from '../donationClass';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private _url:string="http://127.0.0.1:8000/api/donation";
  
  donationType: string = "";
  typeBS: BehaviorSubject<string>;
  person = new personalnfo();
  personBS: BehaviorSubject<personalnfo>;
  //d = new donation();
  //donationBS: BehaviorSubject<donation>;
  donationList: donation[] = [];
  donationListBS: BehaviorSubject<donation[]>;
  
  //newDonation = new donation();

  constructor(private http: HttpClient) { 
    this.typeBS = new BehaviorSubject(this.donationType);
    this.personBS = new BehaviorSubject(this.person);
    this.donationListBS = new BehaviorSubject(this.donationList);
  }
  
  setType(argType:string) {
    this.typeBS.next(argType);
  }

  savePersonalnfo(argPersonalnfo:personalnfo) {
    this.personBS.next(argPersonalnfo);
  }

  saveDonationList(argTypeDict:any, argAmountDict:any) {
    let newdonationList: donation[] = this.donationListBS.getValue();
    for (let type in argTypeDict) {
      if (argTypeDict[type] == true){
        var newDonation = new donation();
        newDonation.firstName = this.personBS.getValue().firstName;
        newDonation.lastName = this.personBS.getValue().lastName;
        newDonation.CMA = this.personBS.getValue().CMA;
        newDonation.phone = this.personBS.getValue().phone;
        newDonation.email = this.personBS.getValue().email;
        newDonation.address1 = this.personBS.getValue().address1;
        newDonation.address2 = this.personBS.getValue().address2;
        newDonation.city = this.personBS.getValue().city;
        newDonation.state = this.personBS.getValue().state;
        newDonation.zipCode = this.personBS.getValue().zipCode;
        newDonation.country = this.personBS.getValue().country;
        newDonation.unbanization = this.personBS.getValue().unbanization;
        newDonation.donationType = type;
        newDonation.amount = argAmountDict[type];
        newdonationList.push(newDonation);
        //console.log("newDonation");
        //console.log(newDonation);
      }
    }
    this.donationListBS.next(newdonationList);
    //console.log("person:");
    //console.log(this.personBS);
    //for(let d in this.donationListBS){
      //console.log("Donation:");
      //console.log(d);
    //}
  }

  getDonatinoType(id:any): Observable<string[]>{
    return this.http.get<string[]>(this._url + "/" + "types").pipe(catchError(this.errorHandler));
  }

  //postDonation(): Observable<donation>{
  //  return this.http.post<donation>(this._url, this.d).pipe(catchError(this.errorHandler));
  //}

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server error");
  }
}
