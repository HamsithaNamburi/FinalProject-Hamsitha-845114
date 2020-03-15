import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient,HttpHeaders} from '@angular/common/http';
 import { Observable } from 'rxjs';
import { Item } from '../item';
import { identifierModuleUrl } from '@angular/compiler';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  list:Item;
url:string='http://localhost:51914/Item/'
  constructor(private http:HttpClient) {
  }
  public GetAll():Observable<Item[]>
  {
  return  this.http.get<Item[]>(this.url+'GetItems',Requestheaders);
  }
  public GetById(id:string):Observable<any>
  {return this.http.get<any>(this.url+'GetById/'+id,Requestheaders);
}
  public AddItems(item):Observable<any>   {
     
    return this.http.post<any>(this.url+'AddItems',item);
   }
   public update(item):Observable<any>   {
     
    return this.http.put<any>(this.url+'Update',item);
   }
   public Delete(id:string):Observable<any>
  {return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders);
}
}
