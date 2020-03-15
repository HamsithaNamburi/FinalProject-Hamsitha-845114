import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
addcategory:FormGroup;
List:any=['Electronics','Fashion','Home Appliances']
submitted:boolean=false;
item:Category;
list:Category[];
  constructor(private form:FormBuilder,private service:AdminService) {
    // this.service.viewcategory().subscribe(res=>{this.list=res; console.log(this.list)},
    // err=>{
    //   console.log(err)
    // });
   }

  ngOnInit() {
    this.addcategory=this.form.group({
    //  cid:['',Validators.required],
      cname:['',Validators.required],
      brief_details:['',Validators.required]

    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.addcategory.invalid){
      alert("form invalid")
      return;
    }
    else{
      alert("Form is validate");
      this.item=new Category();
       this.item.categoryId=Math.floor(Math.random()*100);
       this.item.categoryName=this.addcategory.value["cname"];
       this.item.briefDetails=this.addcategory.value["brief_details"];
       console.log(this.item)
       this.service.AddCategorys(this.item).subscribe(
         res=>{
           console.log("Categories added")},
          err=>{console.log(err)}   
       );
  }

  }
  get f(){
     return this.addcategory.controls;
  }
  // Add(){
  //   alert("Form is validate");
  //   this.item=new Category();
  //    this.item.categoryId=Math.floor(Math.random()*100);
  //    this.item.categoryName=this.addcategory.value["cname"];
  //    this.item.briefDetails=this.addcategory.value["brief_details"];
  //    console.log(this.item)
  //    this.service.AddCategorys(this.item).subscribe(
  //      res=>{
  //        console.log("Categories added")},
  //       err=>{console.log(err)}   
  //    )
  // }
}
