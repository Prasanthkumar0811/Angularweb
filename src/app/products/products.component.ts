import { Component, Input } from '@angular/core';
import { Iproduct } from '../model/product.model';
import { Productservice } from '../_services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Iproduct[]=[]
  visibiity:boolean=true
  constructor(private productservice:Productservice){
  }
  ngOnInit(){
   this.products=this.productservice.getproducts();
 
   
  }
  
  
}
