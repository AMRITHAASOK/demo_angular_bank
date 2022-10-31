import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = 'Your peerfect banking partner'//string interpolation
  account = 'enter ur account'//property binding

  acno = '';
  pswd = '';
  userDetails:any = {
    1000: { acno: 1000, username: 'Neeraj', password: 1000, balance: 50000 },
    1001: { acno: 1000, username: 'Neeraj', password: 1001, balance: 50000 },
    1002: { acno: 1000, username: 'Neeraj', password: 1002, balance: 50000 },
  }
  constructor() { }

  ngOnInit(): void {
  }
  //user defined function
  // login() { 
  //   // alert('login clicked');
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login successfull')
  //     }
  //     else{
  //       alert('Incorrect password');
  //     }
  //   }
  //   else{
  //     alert('User does not exist');
  //   }

  // }

  login(a:any,p:any) { 
    // alert('login clicked');
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('Login successfull')
      }
      else{
        alert('Incorrect password');
      }
    }
    else{
      alert('User does not exist');
    }

  }
  //acnochange

  acnoChange(event: any) {
    this.acno = event.target.value;
    console.log(this.acno);
  }
  pswdChange(event: any) {
    this.pswd = event.target.value;
    console.log(this.pswd);
  }
}
