import { Component, Input } from '@angular/core';
import { Iproduct } from '../../model/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Productservice } from '../../_services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
product:Iproduct;
id:string=''
constructor(private router:ActivatedRoute,private productservice:Productservice,private route:Router){}
ngOnInit(){
  this.router.params.subscribe((params:Params)=>{
    this.id=params['id']
  })
  if(this.id){
    this.product=this.productservice.getproductsByid(this.id)

  }
  
}
onback(){
   this.route.navigate(['/'])
}
onEdit(){
  this.route.navigate(['form',this.id])
}
}
