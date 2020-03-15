import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Models/seller';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  sellerregister:FormGroup;
  submitted:boolean=true;
  item:Seller;

  constructor(private builder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    
    this.sellerregister=this.builder.group({
      sid:[''],
      sname:[''],
      password:[''], 
      mno:[''],
      emailid:[''],
      companyname:[''],
      Website:[''],
      postal_address:[''],
      briefaboutcompany:[''],
      GSTIN:['']

  });
  this.ViewProfile();
}

ViewProfile(){
  this.item=new Seller();
  let id=Number(localStorage.getItem('sid'));
  this.service.viewprofile(id).subscribe(res=>{
    this.item=res;
    console.log(this.item)
  this.sellerregister.patchValue({
    sid:this.item.sid,
    sname:this.item.username,
    companyname:this.item.companyname,
    briefaboutcompany:this.item.briefaboutcompany,
    mno:this.item.contactnumber,
    Website:this.item.website,
    GSTIN:this.item.gstin,
    password:this.item.password,
    emailid:this.item.emailid,
    postal_address:this.item.postalAddress
  

  })},
    err=>{
      console.log("err")
  
  });
  }
  
onSubmit(){
    this.submitted=true;
  }
  get f()
  {
    return this.sellerregister.controls;
  }
  update(){
   // this.item=new Seller();
  
       this.item.username=this.sellerregister.value["sname"];
       this.item.contactnumber=Number(this.sellerregister.value["mno"]);
       this.item.emailid=this.sellerregister.value["emailid"];
       this.item.password=this.sellerregister.value["password"];
       this.item.website=this.sellerregister.value["Website"];
       this.item.briefaboutcompany=this.sellerregister.value["briefaboutcompany"];
       this.item.postalAddress=this.sellerregister.value["postal_address"];
       this.item.companyname=this.sellerregister.value["companyname"];
       this.item.gstin=this.sellerregister.value["GSTIN"]
       console.log(this.item);
    this.service.update(this.item).subscribe(res=>{
      console.log("profile updated");
    },
    err=>{console.log(err)}
      
    )
  }
  
  }

