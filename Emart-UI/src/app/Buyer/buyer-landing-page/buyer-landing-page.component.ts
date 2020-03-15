import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin/admin.service';
import { ItemService } from 'src/app/Seller/item.service';
import { Category } from 'src/app/Models/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  category:Category[];
  scategory:FormGroup;
items:Items[]=[];
  constructor(private buyer:BuyerService,private itemserv:ItemService,private builder:FormBuilder,private route:Router) {
  //   this.buyer.getproducts().subscribe(res=>{this.items=res;
  //   console.log(this.items)})
  // var sid=localStorage.getItem("bid");
  //   var bid=localStorage.getItem('bid');
  //   if(sid!=null||bid!=null){
  //     this.route.navigateByUrl("nav/home");
  //   }else{
  //     this.route.navigateByUrl("buyer-landing-page");
  //   }
   }

  ngOnInit() {
  this.scategory=this.builder.group({
   search:['']
  });

  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("nav/home");
  }
search(){
  alert("search");
  let name=this.scategory.value['serach'];
  this.itemserv.getitem(name).subscribe(res=>{this.items=res,console.log(this.items)
    
     // id:this.items.id,
    //   name:this.items.,
    // price:Number(this.items.price),
    // img:this.items.image
  
  // this.itemserv.GetsubcategoryById()
  
  
})
}
}
