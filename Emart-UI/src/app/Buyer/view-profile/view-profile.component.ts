import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validator, Validators} from '@angular/forms';
import { Buyer } from 'src/app/models/buyer';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  buyerregister:FormGroup;
  submitted:boolean=false;
  item:Buyer;
  constructor(private form:FormBuilder,private service:BuyerService,private route:Router) {
    
  }
  ngOnInit() {
    this.buyerregister=this.form.group({
      bid:['',[Validators.required]],
      bname:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      cdate:['',[Validators.required]],
      mno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      bpwd:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
   this.ViewProfile();
  }
ViewProfile(){
  let bid=Number(localStorage.getItem("bid"))
  this.service.ViewProfile(bid).subscribe(res=>{this.item=res;
  console.log(this.item)
  this.buyerregister.setValue({
    bid:this.item.id,
    bname:this.item.username,
    cdate:this.item.createddatetime,
    email:this.item.emailid,
    bpwd:this.item.password,
    mno:this.item.mobilenumber

  })
},
  err=>{
    console.log(err);
  }
  )}
  onSubmit(){
    this.submitted=true;
  }
 update(){
   this.item=new Buyer();
  this.item.id=Number(this.buyerregister.value["bid"]);
  this.item.username=this.buyerregister.value["bname"];
  this.item.createddatetime=this.buyerregister.value["cdate"];
//  this.item.desig=this.buyerregister.value["desig"];
  this.item.mobilenumber=Number(this.buyerregister.value["mno"]);
  this.item.emailid=this.buyerregister.value["email"];
  this.item.password=this.buyerregister.value["bpwd"];
   this.service.update(this.item).subscribe(res=>{console.log("profile updated")},
   err=>{console.log(err)} )
}
get f(){
  return this.buyerregister.controls
}
logout(){
localStorage.clear();
this.route.navigateByUrl("nav/home");
}
} 




