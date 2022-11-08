import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login username
  currentUser: any;
  //login acno

  currentAcno: any;

 
  //data
  userDetails: any = {
    1000: { acno: 1000, username: 'Neeraj', password: 1000, balance: 50000,transaction:[] },
    1001: { acno: 1001, username: 'Manu', password: 1001, balance: 50000,transaction:[]  },
    1002: { acno: 1002, username: 'Rahul', password: 1002, balance: 50000,transaction:[]  },
  }

  constructor() { }

  //register

  register(acno: any, username: any, password: any) {

    let userDetails = this.userDetails;

    if (acno in userDetails) {
      return false;
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction:[] 
      }
      console.log(userDetails);
      return true;

    }

  }
  login(acno: any,pswd: any) { 
    // alert('login clicked');
  
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        this.currentUser = userDetails[acno]['username'];
        this.currentAcno = acno;
 
       return true;
       
      
      }
      else{
        alert('Incorrect password');
        return false;
      }
    }
    else{
      alert('User does not exist');
return false;
    }

  }

  deposit(acno:any,pswd:any,amt:any){

    let userDetails=this.userDetails;
    var  amount=parseInt(amt)
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        userDetails[acno]['balance'] += amount;
        userDetails[acno]['transaction'].push({
          type:'Creadited',
          amount:amount
        })
        console.log(userDetails);
        
        return userDetails[acno]['balance'];

      }
      else{
        alert('Incorrect password');
        return false;
      }
    }
      else{
        alert('User does not exist');
        return false;
      }
    }
    withdraw(acno:any,pswd:any,amt:any){

      let userDetails=this.userDetails;
      var  amount=parseInt(amt)
      if(acno in userDetails){
        if(pswd==userDetails[acno]['password']){
          if(userDetails[acno]['balance']>amount){
            userDetails[acno]['balance'] -= amount;
            userDetails[acno]['transaction'].push({
              type:'Debited',
              amount:amount
            })
            console.log(userDetails);
            return userDetails[acno]['balance'];
          }
        else{
          alert('insufficient funds');
          return false;
        }
  
        }
        else{
          alert('Incorrect password');
          return false;
        }
      }
        else{
          alert('User does not exist');
          return false;
        }
      }

      getTransaction(acno:any){
        return this.userDetails[acno]['transaction'];
      }
}



