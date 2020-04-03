import { Component, OnInit } from '@angular/core';
import { MyValidators } from '../../../utils/validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  // id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id)
      .subscribe(product => {
        this.form.patchValue(product);   // inserta la informacion del producto en el formulario ya construido
      });
    }, error => {
      console.log(error);
    });
  }

  editProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
      // this.router.navigate(['./admin/products']);
    }
    // console.log(this.form.value);
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
