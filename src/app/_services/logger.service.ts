import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class Loggerservice{
    logger(message:string){
        console.warn('Loogerservice' + message)
    }

}