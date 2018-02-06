import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core'; 
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

import { AppRoutingModule } from './/app-routing.module';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
  
    ProductsComponent,
  
    DashboardComponent,
  
    ContactComponent,
  
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
