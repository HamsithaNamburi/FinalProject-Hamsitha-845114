import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { SubCategory } from 'src/app/Models/sub-category'
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {
list:SubCategory[]
item:SubCategory;
addsubcategory:FormGroup;
List:any=['Electronics','Fashion','Home Appliances']
List2:any=['Mobiles','Telivision','Laptops','Washing machines','Watches','Clothing','Footware','Jwellery']
  constructor(private service:AdminService,private form:FormBuilder) {
    // this.list=new SubCategory
    this.service.viewsubcategories().subscribe(res=>{this.list=res
    console.log(this.list)})
   }

  ngOnInit() {
    this.addsubcategory=this.form.group({
      subcategory_id:['',Validators.required],
      category_id:['',Validators.required],
      subcategory_name:['',Validators.required],
      brief_details:['',Validators.required],
      GSTIN:['',Validators.required]
    })
  }

  Delete(id:number)
  {
  
    this.service.deletesubcategories(id).subscribe(res=>{this.list=res
    console.log(this.list)},err=>{console.log(err.innermessage)})
this.viewprofile(id);
  }
  Edit(){
    // this.list=new SubCategory();
     this.item.subcategoryId=this.addsubcategory.value['subcategory_id']
     this.item.subcategoryName=this.addsubcategory.value['subcategory_name']
   this.item.categoryId=this.addsubcategory.value['category_id']
     this.item.briefDetails=this.addsubcategory.value['brief_details']
     this.item.gstper=this.addsubcategory.value['GSTIN']
    this.service.updatesubcategory(this.item).subscribe(res=>{
    
    console.log("updated successfully");
   } )


  }
  viewprofile(id:number){
        this.service.viewsubactegorybyid(id).subscribe(  
          res=>{this.item=res
            console.log(this.list)
           // console.log(this.list.subcategoryName)
        this.addsubcategory.setValue({  
        subcategory_id:Number(this.item.subcategoryId),
        category_id:Number(this.item.categoryId),
        brief_details:this.item.briefDetails,
        subcategory_name:this.item.subcategoryName,
        GSTIN:this.item.gstper
      })

     } );

  }
  get f(){
    return this.addsubcategory.controls
  }
}
