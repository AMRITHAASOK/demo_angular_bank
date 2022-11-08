import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = 'Your perfect banking partner'//string interpolation
  account = 'enter ur account'//property binding

  acno = '';
  pswd = '';
 
  constructor(private router:Router,private ds:DataService) { 

  }

  ngOnInit(): void {
  }
  //user defined function
  login() { 
    // alert('login clicked');
    var acno=this.acno;
    var pswd=this.pswd;
    const result=this.ds.login(acno,pswd);

    if(result){
      alert('login successful');
      this.router.navigateByUrl('dashboard');
    }

    

  }

  // login(a:any,p:any) { 
  //   // alert('login clicked');
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('Login successfull')
  //       this.router.navigateByUrl('dashboard');
  //     }
  //     else{
  //       alert('Incorrect password');
  //     }
  //   }
  //   else{
  //     alert('User does not exist');
  //   }

  // }
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
