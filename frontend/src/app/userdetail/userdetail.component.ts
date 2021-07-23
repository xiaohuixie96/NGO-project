import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, RouteConfigLoadStart, Router } from '@angular/router';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute, private actRoute: ActivatedRoute, private router: Router) { }

  public errorMsg: any;
  public user: any;
  public Uid: any;
  public role = 'User'

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.Uid = id;
      this.userService.getUserById(this.Uid).subscribe(
        (data) => {
          this.user = data; 
          if(this.user.is_superuser)
          {
            this.role = 'Admin'
          }
          console.log(data); 
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
    });
   
  }

  goBack(){
    this.router.navigate(['/usermanagement']);
  }

}
