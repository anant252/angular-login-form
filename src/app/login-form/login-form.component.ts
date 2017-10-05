import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private isValid: any;
  private content: any;

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
    this.isValid = false;
    // this.content= 'check';
  }
  loginUser(e){
    e.preventDefault();
    this.isValid = true;
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    this.content= username;
    if(password == '123456') {
      
      // console.log(password);
      this.user.setUserLoggedIn();
      this.router.navigate(['success']);
  	}
  	
  
    // console.log(username);
  }
}
