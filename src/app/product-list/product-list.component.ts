import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name : string ="Kunj";
  //  addToCart:number = 0;
  product = {
     name: 'iPhone X',
     price: 789,
     color: 'Black',
     discount: 8.5,
     inStock: 10,
     pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(e : any){
    this.name = e.target.value;
  }
}
