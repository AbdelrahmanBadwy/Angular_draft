import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 24.99 },
    { id: 1, name: 'Product 4', price: 10.0 },
    { id: 2, name: 'Product 5', price: 19.9 },
    { id: 3, name: 'Product 6', price: 24.59 },
  ];
}
