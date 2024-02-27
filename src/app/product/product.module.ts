import { NgModule } from '@angular/core';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductListingComponent } from './product-listings/product-listings.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
     path: 'product', component: ProductComponent,
     children: [
      { path: '', component: ProductListingComponent },
      { path: ':productId', component: ProductdetailComponent}    
     ] 
  },
];

@NgModule({
  declarations: [
    ProductdetailComponent,
    ProductListingComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }