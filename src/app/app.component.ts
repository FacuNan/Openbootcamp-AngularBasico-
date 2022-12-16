import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasico';
  nombre ='Facundo';
  apellido='Comercio'


  recibirMensaje(evento:String){
    alert(evento);
  }
}
