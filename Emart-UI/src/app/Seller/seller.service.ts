import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
url:string='http://localhost:52755/Seller/';
  constructor(private http:HttpClient) { }
  public viewprofile(sid:number):Observable<any>{
    return this.http.get<any>(this.url+'GetProfile/'+sid,Requestheaders);
  } 
  public update(seller:Seller):Observable<any>{
    return this.http.put<any>(this.url+'EditProfile',seller)
  }
}
