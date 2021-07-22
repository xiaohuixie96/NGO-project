import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, RouteConfigLoadStart, Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
   
  }

  goBack(){
    this.router.navigate(['/users']);
  }

}
