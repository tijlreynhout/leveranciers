import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from '../pages/pagenotfound/PageNotFoundComponent';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/HomeComponent';
import { SuppliersComponent } from '../pages/suppliers/SuppliersComponent';
import { SupplierDetailComponent } from '../pages/supplierDetail/SupplierDetailComponent';
import { RegisterComponent } from '../pages/register/RegisterComponent';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'suppliers', component: SuppliersComponent},
    { path: 'suppliers/:id', component: SupplierDetailComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PageNotFoundComponent }
  ];
   
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}