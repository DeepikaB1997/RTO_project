import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RtoServiceService } from '../rto-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:any;
  constructor(public router:Router,
    private rtoService:RtoServiceService) { 
      this.getUserList();
      
    }


    getUserList()
    {
      this.rtoService.getUserList().subscribe((res)=>{
        console.log(res);
        this.users=res;
      })

    }


    delete(userId){
      const res = confirm("Are you sure want to delete user with ID : "+userId);
      if(res==true){
        this.rtoService.deleteUserInfo(userId).subscribe((res)=>{
          this.getUserList();
        })
      }
    }
  ngOnInit() {
  }

}
