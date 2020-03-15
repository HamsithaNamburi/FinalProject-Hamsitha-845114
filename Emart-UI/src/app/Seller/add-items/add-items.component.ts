import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import { Items } from 'src/app/Models/items';
import { AdminService } from 'src/app/Admin/admin.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
additems:FormGroup;
submitted:boolean=false;
  item: Items;
  subcategory:SubCategory[];
  list:Category[];
  image:string;
  
  constructor(private builder:FormBuilder,private route:Router,private service:ItemService,private services:AdminService) { 
   
    this.services.viewcategory().subscribe(res=>{this.list=res; console.log(this.list)},
    err=>{
      console.log(err)
    });
       
  }
  // Get(){
   
  //   alert("dsgfsdfg");
  //   this.service.GetsubcategoryById(this.additems.value['categoryid']).subscribe(res=>{this.subcategory=res; console.log(this.subcategory)})
  // }

  ngOnInit() {
    this.additems=this.builder.group({
    // id:['',[Validators.required]],
    categoryid:['',[Validators.required]],
    subcategoryid:['',[Validators.required]],
    price:['',[Validators.required]],
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    stock_number:['',[Validators.required]],
    remarks:['',[Validators.required]],
    sellerid:[''],
    Img:['']
  })

  }
  onSubmit(){
    this.submitted=true;
    if(this.additems.invalid){
      return;
    }else{
      alert("Form is validate");
    this.item=new Items();
    this.item.id=Math.floor(Math.random()*100),
    this.item.categoryId=Number(this.additems.value['categoryid']),
    this.item.subcategoryId=Number(this.additems.value['subcategoryid']),
    this.item.price=Number(this.additems.value['price']);
    this.item.remarks=this.additems.value['remarks'];
    this.item.itemName=this.additems.value['name'];
    this.item.itemDescription=this.additems.value['description'];
    this.item.stockNumber=Number(this.additems.value['stock_number']);
    this.item.sellerid=Number(localStorage.getItem('sid'));
    this.item.image=this.image;
    console.log(this.item);
    this.service.Additems(this.item).subscribe(
      err=>{
        console.log(err);
      });
      this.route.navigateByUrl("seller-landing-page/view-items")
    }

    }

    get f(){
      return this.additems.controls;
    }
    Get(){
   
      alert("dsgfsdfg");
      this.service.GetsubcategoryById(this.additems.value['categoryid']).subscribe(res=>{this.subcategory=res; console.log(this.subcategory)},err=>{console.log(err)})
    }
    fileEvent(event){
      this.image = event.target.files[0].name;
  } 
  }


