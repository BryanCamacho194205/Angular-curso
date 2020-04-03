import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { ProductsOrderedPipe } from '../../../shared/pipes/products-ordered.pipe';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>; // Un observable es un flujo de datos

  constructor(
    private cartService: CartService
  ) {
		this.products$ = this.cartService.cart$;
		console.log(this.products$);
  }

  ngOnInit(): void {
  }

}
