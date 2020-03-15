import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms'
import { ItemService } from '../Services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  itemForm:FormGroup;
  submitted=false;
list:Item[];
  item:Item;
  constructor(private builder:FormBuilder,private service:ItemService) {
 this.service.GetAll().subscribe(res=>{
   this.list=res;
   console.log(this.list);
 },err=>{
   console.log(err);
 }
 )
  }

  ngOnInit() {
    this.itemForm=this.builder.group({
      id:['',Validators.required],
      name:[''],
      price:[''],
      stock:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      alert(this.itemForm.value["id"]);
      this.add();
     
  }

  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Search()
  {
    let id=this.itemForm.value["id"];
     this.service.GetById(id).subscribe(res=>{
       this.item=res;
      console.log(this.item);
    this.itemForm.setValue({
      id:this.item.itemid,
      name:this.item.name,
      price:this.item.price,
      stock:this.item.stock
    })})
     alert(this.itemForm.value["id"])
  }
add(){
  this.item=new Item();
  this.item.itemid=this.itemForm.value["id"];
  this.item.name=this.itemForm.value["name"]
  this.item.price=Number( this.itemForm.value["price"]);
  this.item.stock=Number(this.itemForm.value["stock"]);
  console.log(this.item);
  this.service.AddItems(this.item).subscribe(res=>{
    console.log('Record Added')
  },err=>{
    console.log(err)
  })


}
Delete(){
  let id=this.itemForm.value["id"];
  this.service.Delete(id).subscribe(res=>{
    
   console.log( "record delete");
  },
  err=>{
    console.log(err);
 
 })
  alert(this.itemForm.value["id"])
}
Update(){
  // this.Search();                 
  this.item=new Item();
  this.item.itemid=this.itemForm.value["id"];
  this.item.name=this.itemForm.value["name"]
  this.item.price=Number( this.itemForm.value["price"]);
  this.item.stock=Number(this.itemForm.value["stock"]);
  console.log(this.item);
  this.service.update (this.item).subscribe(res=>{
    console.log('Record updated')
  },err=>{
    console.log(err.innermessage)
  })
}
}
