import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/models/buyer';
import { Subscriber } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.css']
})
export class BuyerRegisterComponent implements OnInit {
buyerregister:FormGroup;
submitted:boolean=false;
item:Buyer;
items:Buyer[]=[];
  buyer: any;
  constructor(private formbuilder:FormBuilder,private user:UserService,private route:Router) {
    
   }

  ngOnInit() {
    this.buyerregister=this.formbuilder.group({
      // bid:['',[Validators.required]],
      bname:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      cdate:['',[Validators.required]],
      mno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      bpwd:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
}
onSubmit(){
 this.item=new Buyer();
  this.submitted=true;
  if(this.buyerregister.invalid){
    return;
  }
  else
  {
    alert("Form is Validated")
   this.item=new Buyer();
    console.log(this.buyerregister.value);
    console.log(JSON.stringify(this.buyerregister.value));
    console.log(this.buyerregister.value["bid"]);
    console.log(this.buyerregister.value["bname"]);
    this.item.id=Math.floor(Math.random()*100)
     this.item.username=this.buyerregister.value["bname"];
      this.item.createddatetime=this.buyerregister.value["cdate"];
   //  this.item.desig=this.buyerregister.value["desig"];
  //  this.item.createddatetime=DatePipe.
  //this.item.createddatetime=Date.now().toString();
     this.item.mobilenumber=Number(this.buyerregister.value["mno"]);
     this.item.emailid=this.buyerregister.value["email"];
     this.item.password=this.buyerregister.value["bpwd"];
     this.user.BuyerRegister(this.item).subscribe(
       res=>{this.item=res;console.log(this.item)},
       err=>{console.log(err)}
     );
     this.route.navigateByUrl("nav/login")
    //  this.items.push(this.item);
    //  console.log(this.item);
  }
}
get f(){ return this.buyerregister.controls;}
onReset(){
this.submitted=false;
this.buyerregister.reset;
}

}


