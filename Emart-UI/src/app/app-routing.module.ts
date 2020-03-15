import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { HomeComponent } from './Account/home/home.component';
import { BuyerRegisterComponent } from './Account/buyer-register/buyer-register.component';
import { SellerRegisterComponent } from './Account/seller-register/seller-register.component';
import { LoginComponent } from './Account/login/login.component';
import { BuyItemComponent } from './Buyer/buy-item/buy-item.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
//import { ViewsellerprofileComponent } from './seller/viewsellerprofile/viewsellerprofile.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';
import { SearchComponent } from './search/search.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddToCartComponent } from './Buyer/add-to-cart/add-to-cart.component';

import { NavComponent } from './Account/nav/nav.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { ContactComponent } from './Account/contact/contact.component';


const routes: Routes = [
{path:'buyer-landing-page',component:BuyerLandingPageComponent,children:[{path:'view-cart',component:ViewCartComponent},{path:'view-profile',component:ViewProfileComponent}]},
{path:'seller-landing-page',component:SellerLandingPageComponent,children:[{path:'add-items',component:AddItemsComponent},{path:'seller-profile',component:SellerProfileComponent},{path:'view-items',component:ViewItemsComponent},{path:'view-reports',component:ViewReportsComponent}]},
{path:'admin-landing-page',component:AdminLandingPageComponent,children:[{path:'add-sub-category',component:AddSubCategoryComponent},{path:'add-category',component:AddCategoryComponent},{path:'viewsubcategory',component:ViewsubcategoryComponent},{path:'viewcategory',component:ViewcategoryComponent},{path:'add-sub-category',component:AddSubCategoryComponent},{path:'block-unblock-seller',component:BlockUnblockSellerComponent}]},
{path:'nav',component:NavComponent,children:[{path:'login',component:LoginComponent},{path:'home',component:HomeComponent},{path:'buyer-register',component:BuyerRegisterComponent},
{path:'seller-register',component:SellerRegisterComponent},]},
{path:'contact',component:ContactComponent},
{path:'buy-item',component:BuyItemComponent},
{path:'view-profile',component:ViewProfileComponent},
//{path:'viewsellerprofile',component:ViewsellerprofileComponent},
{path:"buy-item",component:BuyItemComponent},
{path:"purchasehistory",component:PurchasehistoryComponent},
{path:"search",component:SearchComponent},
{path:"placeorder",component:PlaceorderComponent},
{path:"add-to-cart",component:AddToCartComponent},

{path:'',redirectTo:'nav/home',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
