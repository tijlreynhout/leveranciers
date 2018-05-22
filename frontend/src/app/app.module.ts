import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from '../pages/pagenotfound/PageNotFoundComponent';
import { HomeComponent } from '../pages/home/HomeComponent';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SuppliersComponent } from '../pages/suppliers/SuppliersComponent';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
