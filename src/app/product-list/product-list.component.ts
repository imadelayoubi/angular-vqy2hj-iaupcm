import { Component } from '@angular/core';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = products;

  share() {
    window.alert('The product has been shared!');
  }

  play() {
    console.log('hello');
  }
}
