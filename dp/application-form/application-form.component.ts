import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  user;
  constructor(public activeRoute:ActivatedRoute,
    public userService:UserService,
    public router:Router) { 

    }

  ngOnInit() {
  }

}
