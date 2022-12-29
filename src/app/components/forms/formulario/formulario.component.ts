import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  miFormulario: FormGroup = new FormGroup({});

  constructor(private formsBuilder: FormBuilder){}
  ngOnInit(): void {
  this.miFormulario = this.formsBuilder.group({
    nombre: '',
    apellido: '',
    email: '',
    direccion: ''
  })

  this.miFormulario.valueChanges.subscribe((change)=>console.log)
  }


}
