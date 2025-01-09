import { Component, EventEmitter, Output } from '@angular/core';
import { Iproduct } from '../../model/product.model';
import { Productservice } from '../../_services/product.service';
import { Loggerservice } from '../../_services/logger.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  id:string=''
  isEditmode:boolean=false;
  product:Iproduct={id:'',name:'',price:'',brand:'',imageUrl:'',manufacturedYear:''}
  
  constructor(private productservice:Productservice,private loggerservice:Loggerservice,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
       this.id=params['id']
    })
    if(this.id){
      this.product=this.productservice.getproductsByid(this.id)
      this.isEditmode=true;
    }
  }
  onsubmit(){
    if(!this.isEditmode){
      this.product.id=Math.random().toString();
      this.productservice.addproducts(this.product);
      this.product={id:'',name:'',brand:'',price:'',imageUrl:'',manufacturedYear:''}
      this.router.navigateByUrl(`/`)
    }else{
      this.productservice.updateproduct(this.product)
      this.router.navigateByUrl(`product/${this.product.id}`)

    }
   
    this.loggerservice.logger('Products added')
   
  }
  onback(){
    if(this.isEditmode){
      this.router.navigateByUrl(`product/${this.product.id}`)
    }else{
      this.router.navigateByUrl(`/`)
    }
  }
 

}
