import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { BranchOfficesService } from '../../../core/services/branch-offices.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

contactForm = this.fb.group({
name: [null, Validators.required],
email: [null, [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
city: [null, Validators.required],
address: [null, Validators.required],
date: [null, Validators.required],
firstName: [null, Validators.required],
lastName: [null, Validators.required],
product: [null, Validators.required],
});

branchOffices = this.branchOfficesService.getBranchOffice();

step = 0;
quantity = 1;


products: object = [{name: 'camiseta'}, {name: 'gorra'}];

  cities: object = [
    {name: 'Galápagos', canton: 'Pto. Baquerizo Moreno'},
    {name: 'Esmeraldas', canton: 'Esmeraldas'},
    {name: 'Manabí', canton: 'Portoviejo'},
    {name: 'Los Ríos', canton: 'Babahoyo'},
    {name: 'Santa Elena', canton: 'Sanat Elena'},
    {name: 'Guayas', canton: 'Guayaquil'},
    {name: 'Sto. Domingo de los Tsachilas', canton: 'Santo Domingo'},
    {name: 'El Oro', canton: 'Machala'},
    {name: 'Azuay', canton: 'Cuenca'},
    {name: 'Bolívar', canton: 'Guaranda'},
    {name: 'Cañar', canton: 'Azogues'},
    {name: 'Carchi', canton: 'Tulcán'},
    {name: 'Cotopaxi', canton: 'Latacunga'},
    {name: 'Chimborazo', canton: 'Riobamba'},
    {name: 'Imbabura', canton: 'Ibarra'},
    {name: 'Loja', canton: 'Loja'},
    {name: 'Pichincha', canton: 'Quito'},
    {name: 'Tungurahua', canton: 'Ambato'},
    {name: 'Morona Santiago', canton: 'Macas'},
    {name: 'Napo', canton: 'Tena'},
    {name: 'Orellana', canton: 'Orellana'},
    {name: 'Pastaza', canton: 'Puyo'},
    {name: 'Sucumbíos', canton: 'Lago Agrio'},
    {name: 'Zamora Chinchipe', canton: 'Zamora'},
  ].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
	}

	constructor(private matSnackBar: MatSnackBar, private fb: FormBuilder, private branchOfficesService: BranchOfficesService) {}
  /* openSnackBar() {
    this.matSnackBar.openFromComponent(ContactComponent, {
      duration: 3000,
    });
	} */

  ngOnInit(): void {}
}
