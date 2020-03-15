import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { BuyItemComponent } from './Buyer/buy-item/buy-item.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { UnblockuserBuyerComponent } from './Admin/Block/unblockuser-buyer/unblockuser-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { HomeComponent } from './Account/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { BuyerRegisterComponent } from './Account/buyer-register/buyer-register.component';
import { SellerRegisterComponent } from './Account/seller-register/seller-register.component';
import { UserService } from './Services/user.service';
import {RouterModule} from '@angular/router';
//import { ViewsellerprofileComponent } from './seller/viewsellerprofile/viewsellerprofile.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { SearchComponent } from './search/search.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddToCartComponent } from './Buyer/add-to-cart/add-to-cart.component';
import { NavComponent } from './Account/nav/nav.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { FootersComponent } from './Account/footers/footers.component';
import { ContactComponent } from './Account/contact/contact.component';
//import { ViewsellerprofileComponent } from './seller/viewsellerprofile/viewsellerprofile.component';
// import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    ViewProfileComponent,
    BuyItemComponent,
    ViewCartComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    AdminLandingPageComponent,
    UnblockuserBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    HomeComponent,
    LoginComponent,
    BuyerRegisterComponent,
    SellerRegisterComponent,
//ViewsellerprofileComponent,
    ViewcategoryComponent,
    ViewsubcategoryComponent,
    PurchasehistoryComponent,
    SearchComponent,
    PlaceorderComponent,
    AddToCartComponent,
    NavComponent,
    SellerProfileComponent,
    FootersComponent,
    ContactComponent,
   // ViewsellerprofileComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
