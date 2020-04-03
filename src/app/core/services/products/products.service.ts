import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:4403/Product';

/*   product: Product;
  productsNew: Product[];
  products: Product[] = [
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

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    // return this.products;
    /* return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products/'); */
    /* return this.http.get<Product[]>(`${environment.url_api}/products`); */
    return this.http.get<Product[]>(this.url);
  }
  getProduct(id: string): Observable<Product> {
    /* return this.products.find(item => id === item.id); */
    return this.http.get<Product>(`${this.url}/${id}`, { params: new HttpParams() });
  }

 /*  getProduct(id: string) {
    return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  } */

  /* createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  } */

  /* createProduct(product: Product) {
    return this.products.push(product);
  } */

  createProduct(entity: Product): Observable<number> {
    return this.http.post<number>(this.url, entity);
  }

  /* updateProduct(id: string, chages: Partial<Product>) {
    // return this.http.put(`${environment.url_api}/products/${id}`, chages);
  } */

  updateProduct(entity: Product): Observable<number> {
    // return this.http.put(`${environment.url_api}/products/${id}`, chages);
    return this.http.put<number>(this.url, entity);
  }

  /* deleteProduct(id: string) {
    // return this.http.delete(`${environment.url_api}/products/${id}`);
  } */

  deleteProduct(id: string): Observable<number> {
    /* this.products.splice(this.products.indexOf(this.getProduct(id)), 1);
    this.productsNew = this.getAllProducts(); */
    // console.log(this.productsNew);
    return this.http.delete<number>(`${this.url}?id=${id}`, { params: new HttpParams() });
	}

}
