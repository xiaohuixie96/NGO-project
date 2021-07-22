import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError  } from 'rxjs';
import { donation, personalnfo, donationType } from '../donationClass';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private _url:string="http://127.0.0.1:8000";
  errorMsg:any;

  donationType: string = "";
  typeBS: BehaviorSubject<string>;
  donationTypeList: donationType[] = [];
  donationTypeListBS: BehaviorSubject<donationType[]>
  person = new personalnfo();
  personBS: BehaviorSubject<personalnfo>;
  //d = new donation();
  //donationBS: BehaviorSubject<donation>;
  donationList: donation[] = [];
  donationListBS: BehaviorSubject<donation[]>;
  
  //newDonation = new donation();

  constructor(private http: HttpClient) { 
    this.typeBS = new BehaviorSubject(this.donationType);
    this.donationTypeListBS = new BehaviorSubject(this.donationTypeList);
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
        newDonation.user = 1;
        newDonation.firstName = this.personBS.getValue().firstName;
        newDonation.lastName = this.personBS.getValue().lastName;
        newDonation.CMA = Number(this.personBS.getValue().CMA);
        newDonation.phone = Number(this.personBS.getValue().phone);
        newDonation.email = this.personBS.getValue().email;
        newDonation.address1 = this.personBS.getValue().address1;
        newDonation.address2 = this.personBS.getValue().address2;
        newDonation.city = this.personBS.getValue().city;
        newDonation.state = this.personBS.getValue().state;
        newDonation.zipCode = this.personBS.getValue().zipCode;
        newDonation.country = this.personBS.getValue().country;
        newDonation.urbanization = this.personBS.getValue().unbanization;
        newDonation.donationType = type;
        newDonation.amount = Number(argAmountDict[type]);
        newDonation.date = formatDate(new Date(), 'yyyy/MM/dd', 'en');
        newdonationList.push(newDonation);
      }
    }
    this.donationListBS.next(newdonationList);

  }

  getDonationType_sevice(){
    this.http.get<donationType[]>(this._url + "/" + "donationtype/").pipe(catchError(this.errorHandler)).subscribe(
      (data)=> {this.donationTypeList = data;
                console.log(data)},
      (error)=> this.errorMsg = error,() => console.log("Completed"));
      console.log("this.donationTypeList:");
      console.log(this.donationTypeList);
      this.donationTypeListBS.next(this.donationTypeList);
  }
  getDonationType(){
    return this.http.get<donationType[]>(this._url + "/" + "donationtype/").pipe(catchError(this.errorHandler));
  }

  getDonation(){
    return this.http.get<donation[]>(this._url + "/" + "donation/").pipe(catchError(this.errorHandler));
  }
  
  postDonation(donData:any): Observable<donation[]>{
    console.log("Sending Data")
    console.log(donData)
    return this.http.post<donation[]>(this._url+ "/" + "donation/", donData).pipe(catchError(this.errorHandler));
  }

  resetDonationList(){
    this.donationList  = [];
    this.donationListBS = new BehaviorSubject(this.donationList);
  }

  //postDonation(): Observable<donation>{
  //  return this.http.post<donation>(this._url, this.d).pipe(catchError(this.errorHandler));
  //}

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "server error");
  }
}
