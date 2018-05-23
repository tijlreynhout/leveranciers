import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '../pages/pagenotfound/PageNotFoundComponent';
import { HomeComponent } from '../pages/home/HomeComponent';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SuppliersComponent } from '../pages/suppliers/SuppliersComponent';
import { SupplierDetailComponent } from '../pages/supplierDetail/SupplierDetailComponent';
import { RegisterComponent } from '../pages/register/RegisterComponent';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    SuppliersComponent,
    SupplierDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
