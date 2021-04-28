import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import{ListaClientes} from '../../../interfaces/clientes';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  

  createFormGroup(){
    return new FormGroup({
      nombre:new FormControl('',[Validators.required, Validators.minLength(5)]),
      apellido:new FormControl('',[Validators.required, Validators.minLength(5)]),
      genero:new FormControl('',[Validators.required ]),
      pais:new FormControl('',[Validators.required]),
      ciudad:new FormControl('',[Validators.required , Validators.minLength(5)])
    });
  }
  formulario:FormGroup;
  Lista =ListaClientes;
  constructor(){
    this.formulario =this.createFormGroup();
  }
  ngOnInit(): void {
  }
  
  ValidarDatos(){
    if(!this.formulario.valid){
      alert("Complete el Formulario");
      return;
    }
    if(this.formulario.value.genero==""){
      alert("Debe elegir un genero");
      return;
    }
    this.Lista.push(this.formulario.value);
  }

}
