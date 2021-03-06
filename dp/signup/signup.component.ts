import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  constructor(private userService:UserService,
    private router:Router) { }




  ngOnInit() {
  }

  register(myForm)
  {
    let data = myForm.form.value;
    debugger

    this.userService.register(data).subscribe((res)=>{

    this.router.navigate(['login']);


    
    },(error)=>{

      
    }
)
  }


  cancel()
  {
    this.router.navigate(['']); 
  }

}
