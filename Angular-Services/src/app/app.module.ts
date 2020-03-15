import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DemoComponent } from './demo/demo.component';
import { CalculateService } from './Services/calculate.service';
import { ItemService } from './Services/item.service';
import { ViewAllComponent } from './view-all/view-all.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DemoComponent,
    ViewAllComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CalculateService,ItemService],
  bootstrap: [ViewAllComponent]
})
export class AppModule {}
