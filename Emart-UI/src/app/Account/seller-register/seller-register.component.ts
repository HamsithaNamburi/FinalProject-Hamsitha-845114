import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent implements OnInit {

sellerregister:FormGroup;
submitted:boolean=false
items:Seller[]=[];
item:Seller;

  constructor(private formbuilder:FormBuilder,private user:UserService ) {

   }

  ngOnInit() {
    this.sellerregister=this.formbuilder.group({
      ///id:['',[Validators.required]],
      sname:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$"),Validators.minLength(6)]], 
      mno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      emailid:['',[Validators.required,Validators.email]],
      companyname:['',[Validators.required]],
      Website:['',[Validators.required]],
      postal_address:['',[Validators.required]],
      briefaboutcompany:['',[Validators.required]],
      GSTIN:['']


  });
  }
  onSubmit(){
    this.submitted=true;
    if(this.sellerregister.invalid){
      return;
    }else{
      alert("Form is validate");
      this.item=new Seller();
      //  console.log(this.sellerregister.value);
      //  console.log(JSON.stringify(this.sellerregister.value));
      //  console.log(this.sellerregister.value["id"]);
      //  console.log(this.sellerregister.value["sname"]);
       this.item.sid=Math.floor(Math.random()*1000);
       this.item.username=this.sellerregister.value["sname"];
       this.item.contactnumber=Number(this.sellerregister.value["mno"]);
       this.item.emailid=this.sellerregister.value["emailid"];
       this.item.password=this.sellerregister.value["password"];
       this.item.website=this.sellerregister.value["Website"];
       this.item.briefaboutcompany=this.sellerregister.value["briefaboutcompany"];
       this.item.postalAddress=this.sellerregister.value["postal_address"]
       this.item.companyname=this.sellerregister.value["companyname"]
       this.item.gstin=this.sellerregister.value["GSTIN"]
       console.log(this.item);
       this.user.SellerRegister(this.item).subscribe(
         res=>{
        console.log("Seller Added")},
       err=>{console.log(err)}
     );

     //  this.items.push(this.item);
      // console.log(this.item);
    }
  }
  get f(){ return this.sellerregister.controls;}
  onReset(){
  this.submitted=false;
  this.sellerregister.reset;
  }
  }


