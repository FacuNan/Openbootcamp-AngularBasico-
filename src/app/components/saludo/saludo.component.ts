import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})


export class SaludoComponent implements OnInit, OnDestroy, OnChanges{
myStyle: Object ={
   color:'black',
   fontSize:'20px',
   fontWeight:'bold'
}

  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.', changes['nombre'].previousValue);
    console.log('cambio realizado' , changes['nombre'].currentValue )
  }
  previousValue: any;
  currentValue: any;


 
  @Input() nombre: String ='anonimo'
  @Output() mensajeEmiitter: EventEmitter<String> = new EventEmitter<String>();


  enviarMensaje():void{
    this.mensajeEmiitter.emit('Usted esta realizando cambios en el componente padre')

  }

}
