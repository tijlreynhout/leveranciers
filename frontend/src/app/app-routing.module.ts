import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from '../pages/pagenotfound/PageNotFoundComponent';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/HomeComponent';
import { SuppliersComponent } from '../pages/suppliers/SuppliersComponent';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'suppliers', component: SuppliersComponent},
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