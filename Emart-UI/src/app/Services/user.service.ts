import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../models/buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}



@Injectable({
  providedIn: 'root'
})
export class UserService {


url:string="http://localhost:52755/User/";

  constructor(private http:HttpClient) {  }

 public BuyerRegister(buyer:Buyer):Observable<any>{
   return this.http.post<any>(this.url+'BuyerRegister',buyer);
 }
 public SellerRegister(seller:Seller):Observable<any>{
  return this.http.post<any>(this.url+'SellerRegister',seller);
}
public  BuyerLogin(username:string,password:string):Observable<any>{
  return this.http.get<any>(this.url+'BuyerLogin/'+username+'/'+password)
}
public  SellerLogin(username:string,password:string):Observable<any>{
  return this.http.get<any>(this.url+'SellerLogin/'+username+'/'+password)
}
}
