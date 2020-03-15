import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/models/buyer';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/Services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/token';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
submitted:boolean=false;
buyer:Buyer;
seller:Seller;
  flag: number;
  buy: number;
  sel: number;
  username: string;
  password: string;
 
  
  role:string='seller';
// username:string;
// password:string;

  constructor(private form:FormBuilder,private service:UserService,private route:Router) { }

  ngOnInit() {
    this.login=this.form.group({ username:[''],
  password:[''],
role:['']})
}
  onSubmit(){
    this.submitted=true;
   // this.Login();
  }
public Validate1(){
//this.token=new Token();
//   this.buyer=new Buyer();
//   this.seller=new Seller();
   let username=this.login.value['username'];
  let password=this.login.value['password'];

  // if(this.login.value['username']=="Admin" && this.login.value['password']=="admin")
  // {
  //  console.log("Admin Login");
  //  }
  //  else
  // / {


  //  this.service.BuyerLogin(username,password).subscribe(res=>{localStorage.setItem('token',res.token)
  //  if(res.token==""||res.token==null)
  //  {
  //    console.log('Invalid Id');
  //  }
  //  else
  //  {
  //  localStorage.setItem('token',res.token)
  //  console.log(res)
  //  this.route.navigateByUrl('buyer-landing-page');
  //  }})

//    this.service.SellerLogin(username,password).subscribe(res=>{localStorage.setItem('token',res.token)
//    if(res.token==""||res.token==null)
//    {
//      console.log('Invalid Id');
//    }
//    else
//    {
//    localStorage.setItem('token',res.token)
//    console.log(res)
//    this.route.navigateByUrl('seller-landing-page');
//    }})

// }
// this.service.BuyerLogin(username,password).subscribe(res=>
//   {
    
//     if(res.message=='success')
//     {
//       this.role="buyer"
//     }
    
    
// });
// console.log(this.token.message);
// if(this.token.message=="success"){
//   localStorage.setItem('token',this.token.token);
//   localStorage.setItem("buyerid",this.token.buyerid.toString());
//   //  this.route.navigateByUrl("buyer-landing-page");
//   this.role="buyer";
// }
// this.service.SellerLogin(username,password).subscribe(res=>{
  
//     if(res.message=='success')
//     {
//       this.role="seller"
//     }
//     // localStorage.setItem('token',this.token.token)
//     // localStorage.setItem("sellerid",this.token.sellerid.toString())
//   });
//   if(this.username=="Admin"&&this.password=="admin"){
//    // alert("admin");
//     this.role="admin"
//   }
  // alert(this.role);
//   switch(this.role){
//     case "buyer":
//       this.route.navigateByUrl("buyer-landing-page");
//       break;
//       case "seller":
//       this.route.navigateByUrl("seller-landing-page");
//       break;
//       case "admin":
//       this.route.navigateByUrl("admin-landing-page");
//       break;
//       // default:
//       //   alert("invalid credentials");

//  }
if(this.role=='buyer')
{
  let token=new Token();
this.service.BuyerLogin('Jack','ghjk').subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    this.role="buyer"; 
  }
});
}
if(this.role=='seller')
{
  let token=new Token();
this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message="success"){
    this.role="seller";
  }
});
}
 
alert(this.role)
switch(this.role){
  case "buyer":
    this.route.navigateByUrl("buyer-landing-page");
    break;
    case "seller":
    this.route.navigateByUrl("seller-landing-page");
    break;
    case "admin":
    this.route.navigateByUrl("admin-landing-page");
    break;
     default:
   alert("invalid credentials");

}


}
public Validate()
{
  let username=this.login.value['username'];
  let password=this.login.value['password'];
  let role=this.login.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
{
  let token=new Token();
this.service.BuyerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("bid",token.buyerid.toString());
    // localStorage.setItem("username",this.buyer.username);
    // localStorage.setItem("password",this.buyer.password);
  this.route.navigateByUrl("buyer-landing-page")
  }
  else{
    alert("inavlid");
  }
});
}
if(role=='seller')
{
 let token=new Token();
this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('token',token.token)
    localStorage.setItem("sid",token.sellerid.toString());
    // localStorage.setItem("username",this.seller.username);
    // localStorage.setItem("password",this.seller.password);
    this.route.navigateByUrl("seller-landing-page")
  }
  else{
    alert("inavlid");
  }
});

}
if(username=="Admin" && password=="admin")
{
  this.route.navigateByUrl("admin-landing-page");
 }

// {
//   alert("No logins founded")
// }
}
Navigate()
{
  switch(this.role){
    case "buyer":
      this.route.navigateByUrl("buyer-landing-page");
      break;
      case "seller":
      this.route.navigateByUrl("seller-landing-page");
      break;
      case "admin":
      this.route.navigateByUrl("admin-landing-page");
      break;
      default:
        alert("invalid credentials");

 }
}
}
