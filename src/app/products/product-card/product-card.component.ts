import { Component, Input } from '@angular/core';
import { Iproduct } from '../../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product:Iproduct
  constructor(private route:Router){}
  details(){
    this.route.navigate(['product',this.product.id])
  }
}
