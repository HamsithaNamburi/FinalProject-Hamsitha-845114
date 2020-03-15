import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
addsubcategory:FormGroup;
submitted:boolean=false;
item:SubCategory;
items:SubCategory[]=[];
list:Category[];
List:any=['Electronics','Fashion','Home Appliances']
List2:any=['Mobiles','Telivision','Laptops','Washing machines','Watches','Clothing','Footware','Jwellery']
  constructor(private form:FormBuilder,private service:AdminService) { 
    this.service.viewcategory().subscribe(res=>{this.list=res; console.log(this.list)},
    err=>{
      console.log(err)
    });

  }

  ngOnInit() {
    this.addsubcategory=this.form.group({
    //  subcategory_id:['',Validators.required],
      category_id:['',Validators.required],
      subcategory_name:['',Validators.required],
      brief_details:['',Validators.required],
      GSTIN:['',Validators.required]
    });
  }
    onSubmit(){
      
  //this.item=new SubCategory();
     
      this.submitted==true;
      alert('subcategories');
      if(this.addsubcategory.invalid){
        return;
       }
       else{
        alert("Form is validate");
        this.item=new SubCategory();
         this.item.subcategoryId=Math.floor(Math.random()*100)
         this.item.categoryId=Number(this.addsubcategory.value["category_id"]);
         this.item.briefDetails=this.addsubcategory.value["brief_details"];
         this.item.subcategoryName=this.addsubcategory.value["subcategory_name"],
         this.item.gstper=Number(this.addsubcategory.value["GSTIN"])
         console.log(this.item);
         this.service.AddSubCategorys(this.item).subscribe(res=>{console.log("subcategories added")},err=>{console.log(err)})

    }

      }
      get f(){
        return this.addsubcategory.controls;
      }
      // Add(){
      //   alert("Form is validate");
      //   this.item=new SubCategory();
      //    this.item.subcategoryId=Math.floor(Math.random()*100)
      //    this.item.categoryId=Number(this.addsubcategory.value["category_id"]);
      //    this.item.briefDetails=this.addsubcategory.value["brief_details"];
      //    this.item.subcategoryName=this.addsubcategory.value["subcategory_name"],
      //    this.item.gstper=Number(this.addsubcategory.value["GSTIN"])
      //    console.log(this.item);
      //    this.service.AddSubCategorys(this.item).subscribe(res=>{console.log("subcategories added")},err=>{console.log(err)})

    
      // }
    }
