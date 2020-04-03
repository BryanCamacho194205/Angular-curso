import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';

import { ProductsService } from '../../../core/services/products/products.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  /* products: Product[] = [
    {
      id: '1',
      title: 'camiseta polo1',
      price: 65,
      image: 'assets/imagenes/imagen1.jpg',
      description: 'Una camiseta unica y diferente'
    },
    {
      id: '2',
      title: 'camiseta polo2',
      price: 65,
      image: 'assets/imagenes/imagen2.jpg',
      description: 'Una camiseta unica y diferente'
    },
    {
      id: '3',
      title: 'camiseta polo3',
      price: 65,
      image: 'assets/imagenes/imagen3.jpg',
      description: 'Una camiseta unica y diferente'
    },
    {
      id: '4',
      title: 'camiseta polo4',
      price: 65,
      image: 'assets/imagenes/imagen4.jpg',
      description: 'Una camiseta unica y diferente'
    },
    {
      id: '5',
      title: 'camiseta polo5',
      price: 65,
      image: 'assets/imagenes/imagen5.jpg',
      description: 'Una camiseta unica y diferente'
    },
    {
      id: '6',
      title: 'camiseta polo6',
      price: 65,
      image: 'assets/imagenes/imagen6.jpg',
      description: 'Una camiseta unica y diferente'
    }
  ]; */

  products: Product[];
  msgError: string;
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(result => {
      this.products = result;
      // console.log('Resultado', result);
    }, error => {
      this.msgError = `No se pudo obterner los datos ${error.message}`;
      console.log('Error');
    });
    /* this.productsService.getAllProducts(); */
  }

  clickedProduct(id: number) {
    // console.log('product');
    console.log(`Producto ID: ${id} añadido al carrito de compras`);
    console.log(id);
  }
}
