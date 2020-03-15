import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {

  constructor(private route:Router) {
    var bid=localStorage.getItem('bid');
    if(bid!=null){
      this.route.navigateByUrl("nav/home");
    }else
    {
      this.route.navigateByUrl("seller-landing-page")
    }
    
   }

  ngOnInit() {
  }
logout(){
  localStorage.clear();
  this.route.navigateByUrl("nav/home")

}
}
