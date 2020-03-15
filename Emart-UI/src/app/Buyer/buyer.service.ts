import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer';
import { Purchase } from '../Models/purchase';
import { Addtocart } from '../Models/addtocart';
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string="http://localhost:52755/Buyer/"

  constructor(private http:HttpClient) {
   
   }
   public ViewProfile(bid:number):Observable<any>{
    return this.http.get<any>(this.url+'GetProfile/'+bid,Requestheaders)
  }
  public update(buyer:Buyer):Observable<any>{
    return this.http.put<any>(this.url+'EditProfile',buyer)
  }
  public AddPurchaseHistory(purchase:Purchase):Observable<any>{
   
    return this.http.post<any>(this.url+'AddPurchaseHistory',purchase)
  }
  public Addtocart(addtocart:Addtocart):Observable<any>{
    return this.http.post<any>(this.url+'Addtocart',addtocart)
  }
  public viewcart(bid:number):Observable<Addtocart[]>{
    return this.http.get<Addtocart[]>(this.url+'ViewCart/'+bid)
  }
  public DeleteFromCart(id:string):Observable<any>{
    return this.http.delete<any>(this.url+'DeleteCart/'+id)
  }
  public getproducts():Observable<Items[]>{
    return this.http.get<Items[]>(this.url+'getproducts')
  }
  public getall(id:number):Observable<any>{
    return this.http.get<any>(this.url+'getAll/'+id)
  }
  public PurchaseHistorys(id:number):Observable<any>{
    return this.http.get<any>(this.url+'PurchaseHistory/'+id)
  }
}
