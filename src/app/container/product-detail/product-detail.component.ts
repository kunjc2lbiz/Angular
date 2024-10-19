import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() productListComponentInProductDetailComponent: ProductListComponent = undefined;

  product: Product;

  ngOnInit(){
    this.product = this.productListComponentInProductDetailComponent.selectedProduct;
  }
}
