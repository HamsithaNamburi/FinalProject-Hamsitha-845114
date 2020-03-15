import { Component, OnInit, Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  isShow = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  Buyer(){
this.route.navigateByUrl("nav/buyer-register")
  }
  Seller(){
    this.route.navigateByUrl("nav/seller-register")
      }
}
