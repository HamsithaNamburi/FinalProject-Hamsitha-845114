import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/Seller/item.service';
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {
buyitem:FormGroup;
item:Items;
  submitted: boolean;
  constructor(private form:FormBuilder,private service:ItemService,private services:BuyerService) { 
  // this.viewprofile(4); 

   
  }
  

  ngOnInit() {
    this.buyitem=this.form.group({
     // id:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required]
      
    })
  }
  viewprofile(id:number){
    this.service.viewItemById(id).subscribe(
      res=>{this.item=res
        console.log(this.item)
        console.log(this.item.itemName)
    this.buyitem.setValue({  
      // id:this.item.id,
      name:this.item.itemName,
    price:Number(this.item.price),
    // stock_number:Number(this.item.stockNumber),
    // description:this.item.itemDescription,
   
  })
  
  } );
}
onSubmit(){
  this.submitted=true;
  this.viewprofile(2);

}
}
