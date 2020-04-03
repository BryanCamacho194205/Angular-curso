import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ProductFormComponent, NavigationComponent, DashboardComponent, ProductsTableComponent, ProductsListComponent, FormProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
