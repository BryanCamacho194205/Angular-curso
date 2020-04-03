import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../../core/services/cart.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  total$: Observable<number>;

  constructor(private cartService: CartService ) {
    this.total$ = this.cartService.cart$
    // tslint:disable-next-line: max-line-length
    .pipe( // Con un pipe no nos suscribimos, sino que guardamos un observable(flujo de datos que está vivo), y la subscripción se hace desde el template.
    // async (en el template) hace la subscripción, y cuando el elemento ya no se está utilizando se desubscribe.
      map(products => products.length) // map se usa para transgormar un valor que llega por un valor nuevo
    );
    // .subscribe(/* products */ total => {
        // console.log(products);

        // Los pipes son una forma de procesar los flujos de datos reactivos
        /* this.total = products.length; */
        // this.total = total;
        // tslint:disable-next-line: max-line-length
        // para transformar el valor que nos llega por uno nuevo, lo que llega es una lista de productos y lo que queiro es la longitud de la lista.
    // });
  }

  ngOnInit(): void {
  }

}
