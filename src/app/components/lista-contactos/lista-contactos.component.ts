import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Interface } from 'src/app/models/interface';
import { ContactoServiceService } from 'src/app/service/contacto-service.service';



@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  ListaContacto: Interface[] = [];
  contactoSeleccionado: Interface | undefined;
  subscripcion: Subscription | undefined;
  constructor(private ContactoServiceService: ContactoServiceService) { }
  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe;
  }

  ngOnInit(): void {
    this.ContactoServiceService.obtenerContactos().then((lista: Interface[])=>{this.ListaContacto =lista});
  }

  obtenerContacto(id: number) {
    this.subscripcion = this.ContactoServiceService.obtenercontactoPorID(id)?.subscribe((contacto: Interface) => {
      this.contactoSeleccionado = contacto;
    })

  }
}
