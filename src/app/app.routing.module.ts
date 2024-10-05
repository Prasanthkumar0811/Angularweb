import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FormComponent } from "./products/form/form.component";
import { ProductAddComponent } from "./products/product-add/product-add.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserAuthComponent } from "./user-auth/user-auth.component";


const appRoutes:Routes=[{
    path:'',
    component:HomeComponent
  
  },{
    path:'user-auth',
    component:UserAuthComponent
  },{
    path:'form',
    component:FormComponent
  },{
      path:'form/:id',
      component:FormComponent
    
  },{
    path:'product/:id',
    component:ProductAddComponent
  },{
    path:'not-found',
    component:NotFoundComponent
  },{
    path:'**',
    redirectTo:'not-found'
  }
  ]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class Approuting{


}