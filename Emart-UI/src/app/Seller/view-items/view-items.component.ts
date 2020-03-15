import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit { 
  viewitems:FormGroup;
  submitted:boolean=false;
  list:Items;
  items:Items[];
 
  
  constructor( private formbuilder:FormBuilder,private service:ItemService) { 
    // this.list=new Items();
    let sid=2;
    this.service.ViewItems(sid).subscribe(res=>{
      this.list=res;
      console.log(this.list);
  })
}
  ngOnInit() {   
    this.viewitems=this.formbuilder.group({
    id:['',[Validators.required]],
    // category_id:['',[Validators.required]],
    // subcategory_id:['',[Validators.required]],
    price:['',[Validators.required]],
    name:['',[Validators.required]],
    description:['',[Validators.required]],
    stock_number:['',[Validators.required]],
    Img:['']
    // remarks:['',[Validators.required]]
    })
  }
edit(){
  // this.list=new Items();
 this.list.itemName=this.viewitems.value["name"];
 this.list.stockNumber=Number(this.viewitems.value['stock_number']);
 this.list.price=Number(this.viewitems.value['price']);
 this.list.itemDescription=this.viewitems.value['description']
 this.list.image=this.viewitems.value['Img']
  this.service.update(this.list).subscribe(res=>{
  console.log("updated successfully")})

}
viewItem(id:number){
  this.service.viewItemById(id).subscribe(
    res=>{this.list=res
      console.log(this.list)
      console.log(this.list.itemName)
  this.viewitems.setValue({  
    id:this.list.id,
    name:this.list.itemName,
     price:Number(this.list.price),
    stock_number:Number(this.list.stockNumber),
    description:this.list.itemDescription,
    Img:this.list.image

 
});

} );
}
Delete(id:number){
  this.service.DeleteItem(id).subscribe(res=>{this.list=res;console.log(this.list)})
}
get f(){
  return this.viewitems.controls;
}
}
