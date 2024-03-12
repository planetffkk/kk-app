import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent {

  product:any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')!]
      this.product = this.productService.getProductById(+params.get('productId')!)
    })
  }
}
