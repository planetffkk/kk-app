import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail', component: ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
