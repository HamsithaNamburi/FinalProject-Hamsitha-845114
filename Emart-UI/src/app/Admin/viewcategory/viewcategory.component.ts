import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/category';


@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
viewcategorys:FormGroup;
list:Category[];
item:Category;
  constructor(private formbulider:FormBuilder,private service:AdminService) {
    // this.list=new Category();
     let name="Electronics"
this.service.viewcategory().subscribe(res=>{this.list=res
console.log(this.list)})
  } 

  ngOnInit() {
    this.viewcategorys=this.formbulider.group({
      cid:['',Validators.required],
      cname:['',Validators.required],
      brief_details:['',Validators.required]

    });

  }
  Edit(){
    //  this.list=new Category();
     this.item.categoryId=Number(this.viewcategorys.value['cid']);
     this.item.categoryName=this.viewcategorys.value['cname']
   this.item.briefDetails=this.viewcategorys.value['brief_details']
     
    this.service.updatecategory(this.item).subscribe(res=>{
    
    console.log("updated successfully");
   } )


  }
  viewprofile(id:number){
        this.service.viewcategorybyid(id).subscribe(  
          res=>{this.item=res
            console.log(this.item)
            console.log(this.item.categoryName)
        this.viewcategorys.setValue({  
        cid:Number(this.item.categoryId),
        cname:this.item.categoryName,
        brief_details:this.item.briefDetails,
      
      })

     } );

  }
get f(){
  return this.viewcategorys.controls;
}
Delete(id:number){
  this.service.deletecategories(id).subscribe(res=>{this.list=res;console.log(this.list)})
}
}
