import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  msgError: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // console.log(params);
      console.log(id);
      this.productsService.getProduct(id)
      .subscribe(result => {
        this.product = result;
      }, error => {
        this.msgError = `No se pudo obtener la información ${error.message}`;
      });
      // console.log(this.product);
      // this.fetchProduct(id);
      /* this.product = this.productsService.getProduct(id); */
    });
  }

 /* fetchProduct(id: string) {
    this.productsService.getProduct(id);
    // .subscribe(product => {
    //  console.log(product);
    //  this.product = product;
    // });
  } */

  /* createProduct() {
    const newProduct: Product = {
      id: '17',
      title: 'nuevo',
      image: 'assets\imagenes\camiseta1.jpg',
      description: 'Un nuevo producto',
      price: 3000
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  } */

  /* updateProduct() {
    const updateProduct: Partial<Product> = {
      description: 'Producto editado',
      price: 5555555
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  } */

  /* deleteProduct() {
    this.productsService.deleteProduct('19')
    .subscribe(rta => {
      console.log(rta);
    });
  } */

}
