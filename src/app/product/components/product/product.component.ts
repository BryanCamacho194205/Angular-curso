/* Los decoradores sirven para saber que tipo de rol o función va a cumplir una clase. */

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit /* DoCheck, OnDestroy */ {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    
    constructor(private cartService: CartService) {
        // console.log('1. constructor');
    }
    /* ngOnChanges(change: SimpleChanges ) {
        console.log('2. ngOnChanges');
        console.log(change);
    } */

    ngOnInit() {
        // console.log('3. ngOnInit');
    }
    /*
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    } */

    addCart() {
        /* console.log('Añadir al carrito'); */
        this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
}
