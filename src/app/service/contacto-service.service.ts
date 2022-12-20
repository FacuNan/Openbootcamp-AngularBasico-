import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactos } from '../mocks/mock';
import { Interface } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor() { }

  obtenerContactos(): Promise<Interface[]>{
    return Promise.resolve(contactos);
  }

  obtenercontactoPorID(ide:number): Observable <Interface> | undefined{
    const contacto = contactos.find((contacto:Interface)=> contacto.id === ide);

    let observable: Observable<Interface>= new Observable((observer)=>{
      observer.next(contacto); //Emite el valor a todo componente subscrito
      observer.complete;
    })
    if(contacto){
      return observable;
    }else{
      return;
    }
  }
}
