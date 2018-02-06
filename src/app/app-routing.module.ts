import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ContactComponent} from './contact/contact.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
    { path: 'dashboard', component: DashboardComponent  },    
    { path: 'contact', component: ContactComponent  },
    { path: 'testimonials', component: TestimonialsComponent}

 
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
