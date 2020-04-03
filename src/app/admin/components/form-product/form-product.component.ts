import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators'; // pipe que hace el proceso de finalizacion
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
      // this.router.navigate(['./admin/products']);
    }
    // console.log(this.form.value);
  }

  uploadFile(event) {
    // tslint:disable-next-line: max-line-length
    // target nos da el elemento, un elemento input con file no lo dan en un array, como solo quiero adjuntar un archivo quiero el que esté en la posición 1.
    const file = event.target.files[0];
    console.log(file);
    const name = file.name;
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);
    // task es un observable porque si la imagen oesa mucho se va a demorar en subir.
    task.snapshotChanges()   // nos permite saber cuando finaliza la tarea
    .pipe(  // proceso task con un pipe para que me notifique cuando finaliza la subida del archivo
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          // tslint:disable-next-line: max-line-length
          this.form.get('image').setValue(url); // la imagen esta hosteada en firebase storage(Ya no está en assets) que es un servidor de archivos e imágenes estáticas.
        });
      })
    ).subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

}
