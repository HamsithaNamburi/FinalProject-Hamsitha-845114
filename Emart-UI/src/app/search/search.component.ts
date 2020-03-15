import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../Seller/item.service';
import { Items } from '../Models/items';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Purchase } from '../Models/purchase';
import { BuyerService } from '../Buyer/buyer.service';
import { Addtocart } from '../Models/addtocart';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form:FormGroup;
  list:Items[];
  item:Items;
  purchase:Purchase;
  addtocart:Addtocart;
  alert: any;
  itemName:string;
List2=["creditcard","debitcard","online transaction"]
  cart: any;
  constructor(private service:ItemService,private buider:FormBuilder,private route:Router,private buyer:BuyerService) { }

  ngOnInit() {
   
    this.form=this.buider.group({
     
      price:[''],
      stocknumber:[''],
      name:[''],
    TName:[''],
     remarks:[''],
     total:[''],
     Tstatus:['']

    });
    
  }
  Search(itemName:string){ 
  //  this.itemName=this.form.value['s1']
  this.service.getitem(itemName).subscribe(res=>{
  this.list=res;
  console.log(this.list);

  localStorage.setItem('item',JSON.stringify(this.list));

 
 })
 

}

viewProfile(item:Items){

  // this.item=JSON.parse(localStorage.getItem('item')); 
  //   this.list.push(this.item);
  //   console.log(this.list);
  // this.service.getitem(this.list["0"].itemName).subscribe(res=>{this.list=res;
  // console.log(this.list)
  // // console.log(this.list[1])
  console.log(item);
this.form.patchValue({
  name:item.itemName,
  price:item.price,
  // stocknumber:item.stockNumber,
  remarks:item.remarks

})
}

Buy(){
  let today=new Date();
  this.purchase=new Purchase();
 this.purchase.id='P'+Math.floor(Math.random()*100);
 this.purchase.BuyerId=Number(localStorage.getItem('bid'));
 this.purchase.sellerId=Number(localStorage.getItem('sid'));
 this.purchase.TName=this.form.value['TName'];
 this.purchase.remarks=this.form.value['remarks'];
 this.purchase.NumberOfItems=Number(this.form.value['stocknumber']);
 this.purchase.TStatus=this.form.value['Tstatus']
 console.log(this.purchase)
//this.purchase.dateTime=Date.now().toString()
 this.buyer.AddPurchaseHistory(this.purchase).subscribe(res=>{console.log("added Successfully")})
this.route.navigateByUrl('placeorder')
}
Addtocart(item:Items){
  this.addtocart=new Addtocart();
  this.item=JSON.parse(localStorage.getItem('item')); 
     this.list.push(this.item);
   console.log(this.list);
    console.log('C'+(Math.floor(Math.random()*100)));
  this.addtocart.id='C'+(Math.floor(Math.random()*100));
  this.addtocart.categoryId=item.categoryId;
  this.addtocart.subcategoryId=item.subcategoryId;
  this.addtocart.itemName=item.itemName;
  this.addtocart.price=item.price;
  this.addtocart.itemDescription=item.itemDescription;
  this.addtocart.sellerId=item.sellerid;
  this.addtocart.buyerId=Number(localStorage.getItem('bid'));
  this.addtocart.image=item.image;
  console.log(this.addtocart);
  this.buyer.Addtocart(this.addtocart).subscribe(res=>{console.log("added to cart")})
}

get f(){
  return this.form.controls;
}
logout(){
 //this.alert.message("successfully signout")
  localStorage.clear();
}
focusIn(){
  this.form.patchValue({
    total:this.form.value["price"]*this.form.value["stocknumber"]
     
  })

  }
}

