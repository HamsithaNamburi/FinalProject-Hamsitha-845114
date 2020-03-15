import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Category } from '../Models/category';
import { Observable, ObservableLike } from 'rxjs';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'applicatiom/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})


export class AdminService {
url:string='http://localhost:52755/Admin/';
url2:string='http://localhost:52755/Buyer/';
  constructor(private http:HttpClient)  { }
  public AddCategorys(category:Category):Observable<any>{
    return this.http.post<any>(this.url+'AddCategory',category);
  }
  public AddSubCategorys(subcategory:SubCategory):Observable<any>{
    return this.http.post<any>(this.url+'AddSubCategory',subcategory);
  }
  public viewcategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.url+'GetCategories')
  }
  public viewsubcategories():Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.url+'GetSubCategories');
  }
  public deletecategories(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'Deletecategory/'+id)
  }
  public deletesubcategories(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'DeleteSubcategory/'+id)
  }
  public updatecategory(category:Category):Observable<any>{
    return this.http.put<any>(this.url+'Updatecategory',category)
  }
  public updatesubcategory(subcategory:SubCategory):Observable<any>{
    return this.http.put<any>(this.url+'Updatesubcategory',subcategory)
  }
  public viewsubactegorybyid(id:number):Observable<any>{
    return this.http.get<any>(this.url+'GetSubCategoryBYId/'+id);
  }
  public viewcategorybyid(id:number):Observable<any>{
    return this.http.get<any>(this.url+'GetCategoryBYId/'+id);
  }

}
