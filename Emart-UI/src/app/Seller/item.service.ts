import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import { Items } from '../Models/items';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:52755/Item/'

  constructor(private http:HttpClient) { }
  public Additems(Item:Items):Observable<any>{
    return this.http.post<any>(this.url+'AddItems',Item)
  }
  public ViewItems(id:number):Observable<any>{
    return this.http.get<any>(this.url+'ViewItems/'+id,Requestheaders)
  }
  public update(Item:Items):Observable<any>{
    return this.http.put<any>(this.url+'UpdateItem',Item)

  }
  public viewItemById(id:number):Observable<any>{
    return this.http.get<any>(this.url+'GetItem/'+id)
  }
  public GetsubcategoryById(id:number):Observable<SubCategory[]>{
    console.log(id);
   return this.http.get<SubCategory[]>(this.url+'GetSubCategoryBYId/'+id)
  }
  public getitem(name:string):Observable<Items[]>{
    console.log("hii")
    return this.http.get<Items[]>(this.url+'Getname/'+name)
  }
  public DeleteItem(id:number):Observable<any>{
return this.http.delete<any>(this.url+'Delete/'+id);
  }
}
