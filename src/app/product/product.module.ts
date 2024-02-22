import { NgModule } from '@angular/core';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
     path: 'product', component: ProductComponent,
     children: [
      { path: '', component: ProductListComponent },
      { path: 'detail', component: ProductdetailComponent}    
     ] 
  },
];

@NgModule({
  declarations: [
    ProductdetailComponent,
    ProductListComponent,
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