export class personalnfo{
  id:number = 0;
  firstName:string = "";
  lastName:string = "";
  CMA:number = 0;
  phone:number = 0;
  email:string = "";
  address1:string = "";
  address2:string = "";
  city:string = "";
  state:string = "";
  zipCode:number = 0;
  country:string = "";
  unbanization:string = "";
}

export class donation{
    //id:number = 0;
    user:number = 1;
    firstName:string = "";
    lastName:string = "";
    CMA:number = 0;
    phone:number = 0;
    email:string = "";
    address1:string = "";
    address2:string = "";
    city:string = "";
    state:string = "";
    zipCode:number = 0;
    country:string = "";
    urbanization:string = "";
    donationType:string = "";
    amount:number = 0;
    date:string = "";
  }

  export class donationType{
    id:number = 0;
    type:string = "";
  }