import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingComponent implements OnInit{

  products: any 

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}
