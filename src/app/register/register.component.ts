import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname="";
  acno="";
  pswd="";
  //register model
  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    // alert('register clicked')
    console.log(this.registerForm);
    

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd= this.registerForm.value.pswd;

    let userDetails= this.ds.userDetails;
    const result=this.ds.register(acno,uname,pswd)
    {
      if(result){
      alert('Register Successfully');
      this.router.navigateByUrl("");
      }
      else{
        alert('Register Failed');
        this.router.navigateByUrl("");
      }
    }
  }
}
