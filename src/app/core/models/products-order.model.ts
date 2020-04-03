import { Product } from './product.model';

export interface ProductsOrdered {
    product: Product;
    quantity: number;
}
