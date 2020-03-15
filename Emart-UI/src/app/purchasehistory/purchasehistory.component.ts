import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Admin/admin.service';
import { ItemService } from '../Seller/item.service';
import { Items } from '../Models/items';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BuyerService } from '../Buyer/buyer.service';
import { Purchase } from '../Models/purchase';


@NgModule({
  declarations: [],
  exports: [],
  providers: [],
})


@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
id:number;
  purch:Purchase[];
  item:Items[]=[];

//   list:Items[]=[];
//   form:FormGroup;
//   submitted: boolean;
// transaction:string;
// cashondelivery:string;
//   constructor(private service:ItemService,private buider:FormBuilder) {
//    }

//   ngOnInit() {
//     this.form=this.buider.group({
//       firstname:['',Validators.required],
//       email:['',Validators.required],
//       itemname:['',Validators.required],
//       price:['',Validators.required],
//       t1:[''],
//       address:['',Validators.required],
//       state:['',Validators.required],
//       city:['',Validators.required],
//       zip:['',Validators.required],
//       cardname:['',Validators.required],
//       cardnumber:['',Validators.required],
//       expyear:['',Validators.required],
//       expmonth:['',Validators.required],
//       cvv:['',Validators.required]
//     })
//   }

//   Search(){ 
//   //  this.list=new Items();
//       let itemName=this.form.value['search']
//       this.service.getitem(itemName).subscribe(res=>{
//       this.list=res;
//       console.log(this.list);
        
//      })
//     }
//     b(){
//       console.log(this.form.value['t1'])
//     }
//     onSubmit(){
//       this.submitted==true;
//     }
//   get  f()
//   {
//     return this.form.controls;
//     }
ngOnInit(){
  
}
constructor(private service:BuyerService,private service1:ItemService){
 let id=Number(localStorage.getItem('bid'));
  this.service.PurchaseHistorys(id).subscribe(res=>
    {
      this.purch=res;
      console.log(this.purch);
      for(let i=0;i<this.purch.length;i++)
      {
      this.service1.viewItemById(this.purch[i].itemId).subscribe(res1=>{
      console.log(this.purch[i].itemId);
        this.item.push(res1);
        console.log(this.item);
      });
      }
      console.log(this.purch);
        })
    
    }
    
}

