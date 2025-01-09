import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iuser } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  isRegistermode:boolean=false
  user:Iuser={Email:'',Password:''}

  constructor(private route:Router){}

  ontoggle(){
    this.isRegistermode=!this.isRegistermode;
  }
  onsubmit(form:NgForm){
     this.user.Email=form.value.Email
     this.user.Password=form.value.Password
     console.log(this.user)

  }
  login(){
    setTimeout(()=>{
      this.route.navigateByUrl('/')
      alert("Login Successfully")
    },500)
  }

}
