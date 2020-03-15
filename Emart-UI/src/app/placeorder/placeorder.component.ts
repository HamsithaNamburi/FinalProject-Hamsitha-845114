import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from '../Buyer/buyer.service';
import { Purchase } from '../Models/purchase';
import { Items } from '../Models/items';
import { ItemService } from '../Seller/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  list:Items[]=[];
  form:FormGroup;
  submitted: boolean;
transaction:string;
cashondelivery:string;
  constructor(private service:ItemService,private buider:FormBuilder,private route:Router) {
   }

  ngOnInit() {
    this.form=this.buider.group({
      firstname:['',Validators.required],
      email:['',Validators.required],
      itemname:['',Validators.required],
      price:['',Validators.required],
      t1:[''],
      address:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required],
      zip:['',Validators.required],
      cardname:['',Validators.required],
      cardnumber:['',Validators.required],
      expyear:['',Validators.required],
      expmonth:['',Validators.required],
      cvv:['',Validators.required]
    })
  }

  Search(){ 
  //  this.list=new Items();
      let itemName=this.form.value['search']
      this.service.getitem(itemName).subscribe(res=>{
      this.list=res;
      console.log(this.list);
        
     })
    }
    b(){
      console.log(this.form.value['t1'])
      alert("Your Ordered placed successfully");
      this.route.navigateByUrl("purchasehistory");
    }
    onSubmit(){
      this.submitted==true;
    }
  get  f()
  {
    return this.form.controls;
    }
    ///////////////////////////////////////////////////
// placeorder:FormGroup;
//   purchase: Purchase;
//   item:Items;
//   submitted:boolean;
//   list:Items[]=[];
//   constructor(private builder:FormBuilder,private buyer:BuyerService) {
//     this.item=JSON.parse(localStorage.getItem('item')); 
//     this.list.push(this.item);
//     console.log(this.list);
//     console.log(this.list["0"]["0"].itemName)
    
//    }

//   ngOnInit() {
//     this.placeorder=this.builder.group({
//       name:[''],
//       price:[''],
//     id:['',Validators.required],
//     BuyerId:['',Validators.required],
//     sellerId:['',Validators.required],
//     TName:['',Validators.required],
//     itemId:['',Validators.required],
//     NumberOfItems:['',Validators.required],
//     remarks:['',Validators.required],
//     TStatus:['',Validators.required],
//   })
//   }
// Add(){
//  this.purchase=new Purchase();
//  this.purchase.id='P'+Math.floor(Math.random()*100);
//  this.purchase.BuyerId=Number(localStorage.getItem('id'));
//  this.purchase.sellerId=this.item.sellerid;
//  this.purchase.TName=this.placeorder.value['TName'];
// this.purchase.remarks=this.placeorder.value['remarks'];
// this.purchase.NumberOfItems=this.placeorder.value['NumberOfItems']
//   this.buyer.AddPurchaseHistory(this.purchase).subscribe(res=>{console.log("added Successfully")})
// }
// onSubmit(){
//   this.submitted=true;
//   this.Add();
// }
// get f(){
//   return this.placeorder.controls;
// }

}
