import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user:any;
  userId:any;
  constructor(public userService:UserService,
    private router:Router)
     {
      this.getUserById(this.userId);
      
     }

     getUserById(userId)
     {
      
     }
  
  ngOnInit() {
  }

}
