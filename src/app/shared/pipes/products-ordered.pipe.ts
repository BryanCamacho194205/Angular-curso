import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ProductsOrdered } from '../../core/models/products-order.model';

@Pipe({
  name: 'productsOrdered'
})
export class ProductsOrderedPipe implements PipeTransform {
	groupedProducts: any[] = [];
  transform(value: Product[]): any {
    value.forEach( product => {
			if (this.groupedProducts.length === 0) {
				this.groupedProducts.push(Object.assign(product, { quantity: 1 }));
			} else {
				let repeatedProduct = this.groupedProducts.findIndex(prod => prod.id == product.id);
				if (repeatedProduct === -1) {
					this.groupedProducts.push(Object.assign(product, { quantity: 1 }));
				} else {
					this.groupedProducts[repeatedProduct].quantity += 1;
				}
			}
		})
		return this.groupedProducts;
  }
}
