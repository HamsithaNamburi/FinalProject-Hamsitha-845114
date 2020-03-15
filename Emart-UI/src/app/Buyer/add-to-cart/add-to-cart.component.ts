import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Addtocart } from 'src/app/Models/addtocart';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
cart:FormGroup;
list:Addtocart[];
  constructor(private service:BuyerService,private route:Router) {
    this.service.viewcart(Number(localStorage.getItem('bid'))).subscribe(res=>{
      this.list=res;
      console.log(this.list);
      localStorage.setItem('item',JSON.stringify(this.list));
   });
  }
  ngOnInit() {
    
  }
Delete(id:string){
  this.service.DeleteFromCart(id).subscribe(res=>{this.list=res; console.log(this.list)})
}
viewProfile(item:Items){

  // this.item=JSON.parse(localStorage.getItem('item')); 
  //   this.list.push(this.item);
  //   console.log(this.list);
  // this.service.getitem(this.list["0"].itemName).subscribe(res=>{this.list=res;
  // console.log(this.list)
  // // console.log(this.list[1])
  console.log(item);
this.cart.patchValue({
  name:item.itemName,
  price:item.price,
  stocknumber:item.stockNumber,
  remarks:item.remarks

});
}
logout(){
  localStorage.clear();
  this.route.navigateByUrl("nav/home");
}

}
