import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.fetchProducts();
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts()
    .subscribe(result => {
      this.products = result;
    }, error => {
      console.log(error);
    });
    /* this.products = this.productsService.getAllProducts(); */
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta);
    }, error => {
      console.log(error);
    });
    /* this.productsService.deleteProduct(id); */
  }
}
