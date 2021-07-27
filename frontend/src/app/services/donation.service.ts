import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError  } from 'rxjs';
import { donation, personalnfo, donationType } from '../donationClass';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { TokenStorageService } from './token-storage.service';

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

  constructor(private http: HttpClient, private token: TokenStorageService) { 
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
        newDonation.user_id = this.personBS.getValue().user_id;
        newDonation.Firstname = this.personBS.getValue().Firstname;
        newDonation.Lastname = this.personBS.getValue().Lastname;
        newDonation.CMA = Number(this.personBS.getValue().CMA);
        newDonation.Phone = Number(this.personBS.getValue().Phone);
        newDonation.Email = this.personBS.getValue().Email;
        newDonation.Address1 = this.personBS.getValue().Address1;
        newDonation.Address2 = this.personBS.getValue().Address2;
        newDonation.City = this.personBS.getValue().City;
        newDonation.State = this.personBS.getValue().State;
        newDonation.Zip = this.personBS.getValue().Zip;
        newDonation.Country = this.personBS.getValue().Country;
        newDonation.Urbanization = this.personBS.getValue().Unbanization;
        newDonation.DonationType = type;
        newDonation.Amount = Number(argAmountDict[type]);
        newDonation.CreatedDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
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

  getDonationById(id: any){
    return this.http.get<donation[]>(this._url + "/donation/" + id).pipe(catchError(this.errorHandler));
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
