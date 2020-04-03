import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficesService {

	brachOffices = [
		{name: 'Sucursal 1', address: 'Por determinar', image: './assets/imagenes/places/quito.png'},
		{name: 'Sucursal 2', address: 'Por determinar', image: './assets/imagenes/places/quito1.jpeg'},
		{name: 'Sucursal 3', address: 'Por determinar', image: './assets/imagenes/places/quito2.jpg'},
		{name: 'Sucursal 4', address: 'Por determinar', image: './assets/imagenes/places/quito4.jpg'},
		];

	constructor() { }
	getBranchOffice() {
		return this.brachOffices;
	}
}
