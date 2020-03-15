import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }
  public add(i:number,j:number):number{
    return Number(i)+Number(j);
  }
  public mul(i:number,j:number):number{
  return  Number(i)*Number(j);
  }
  public Greate(name:string):string{
    let v="Hii"+name;
    return v;
  }
  public substraction(i:number,j:number):number{
    return Number(i)-Number(j);
  }
  public Division(i:number,j:number):number{
    return Number(i)/Number(j);
  }
}
