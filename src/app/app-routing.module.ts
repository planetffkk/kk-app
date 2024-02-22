import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  // { path: '', component: ProductListComponent },
  // { path: 'detail', component: ProductdetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
