import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../Services/calculate.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service:CalculateService) { }

  ngOnInit() {
    console.log('Addition:'+this.service.add(4,8));
    console.log('Multiplication'+this.service.mul(2,8));
    console.log('Greate'+this.service.Greate('Jack'));
  }
   f(){
     console.log(this.service.Greate('james'));
   }
}
