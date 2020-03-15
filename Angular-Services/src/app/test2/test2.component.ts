import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
  providers:[CalculateService]
})
export class Test2Component implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
    console.log('substraction'+this.service.substraction(7,2));
    console.log('Division'+this.service.Division(7,3));
  }
f(){
  console.log('Division'+this.service.Division(82,8));
}
}
