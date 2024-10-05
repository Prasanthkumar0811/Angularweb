import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './products/form/form.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Approuting } from './app.routing.module';
import { HeroComponent } from './hero/hero.component';
import { UserAuthComponent } from './user-auth/user-auth.component';




@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProductAddComponent,
    ProductCardComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    HeroComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,FormsModule,Approuting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
