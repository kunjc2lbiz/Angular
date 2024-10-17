import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  // name : string ="Kunj";
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNameChange(event: any) {
    // this.name = e.target.value;
    // console.log(this.name);
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  listOfString: string[] = ['Mark', 'Steve', 'John', 'Doe', 'Sarah']

  searchTextReceivedFromSearchComponent: string = '';

  setSearchText(value: string){
    this.searchTextReceivedFromSearchComponent = value;
  }
}
