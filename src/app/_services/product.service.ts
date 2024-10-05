import { EventEmitter, Injectable } from "@angular/core";
import { Iproduct } from "../model/product.model";


@Injectable({
    providedIn:'root'
})
export class Productservice{
    productsList: Iproduct[] = [
        {
          id: '1',
          name: 'Iphone 15 Pro Max',
          brand: 'Apple',
          price: '1600',
          imageUrl:
            'https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2024',
        },
        {
          id: '2',
          name: 'Playstation 5',
          brand: 'Sony',
          price: '550',
          imageUrl:
            'https://images.pexels.com/photos/5961216/pexels-photo-5961216.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2027',
        },
        {
          id: '3',
          name: 'Samsung Edge',
          brand: 'Samsung',
          price: '340',
          imageUrl:
            'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2016',
        },
        {
          id: '4',
          name: 'Nikon 36D',
          brand: 'Nikon',
          price: '2300',
          imageUrl:
            'https://images.pexels.com/photos/1250282/pexels-photo-1250282.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2026',
        },
        {
          id: '5',
          name: 'Boat Headphone',
          brand: 'Boat',
          price: '130',
          imageUrl:
            'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2024',
        },
        {
          id: '6',
          name: 'Macbook M2',
          brand: 'Apple',
          price: '1800',
          imageUrl:
            'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2022',
        },
        {
          id: '7',
          name: 'IPhone 11 & Airpods',
          brand: 'Apple',
          price: '1120',
          imageUrl:
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2024',
        },
        {
          id: '8',
          name: 'Google Pixel 7a',
          brand: 'Goolge',
          price: '450',
          imageUrl:
            'https://images.pexels.com/photos/833337/pexels-photo-833337.png?auto=compress&cs=tinysrgb&w=600',
          manufacturedYear: '2021',
        },
      ];

    getproducts():Iproduct[]{
        return this.productsList;
    } 
    addproducts(product:Iproduct):void{
        this.productsList.push(product)
    }  
    getproductsByid(id:string):Iproduct{
        return this.productsList.find((x=>x.id===id))
    }
    updateproduct(update:Iproduct):void{
      const index=this.productsList.findIndex((product)=>product.id===update.id)
      this.productsList[index]=update
    }
}