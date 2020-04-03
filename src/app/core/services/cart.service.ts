import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  // tslint:disable-next-line: max-line-length
  // cart es una instancia de BehaviorSubject que controla el flujo de datos (el array de productos es el control de flujo de datos). Se inicaializa en vacío para que el carrito empiece con cero productos.

  cart$ = this.cart.asObservable();
  // tslint:disable-next-line: max-line-length
  // variable pública que puede ser preguntada por cualquier componente que sea de tipo ObSERVABLE para que cualquiera se suscriba a ella para notar sus cambios en tiempo real.

  constructor() { }
  addCart(product: Product) {
    this.products = [...this.products, product]; // Creamos un nuevo estafdo del arreglo
    // tslint:disable-next-line: max-line-length
    // Cada vez que se agregue algo al corrito se inserta una nueva variable, con la práctica de no mutaciones, no se utiliza push sino que cada vez se crea una nueva referenciqa del arreglo.
    this.cart.next(this.products);
    // tslint:disable-next-line: max-line-length
    // Notificar a todos los componentes que esten subscritos, que hubo un cambio, que algo se agrego al carrito. Se les envía la copia de array (el nuevo estado del array creado).
  }
}
