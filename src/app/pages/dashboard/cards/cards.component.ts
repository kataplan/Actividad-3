import { Component, OnInit } from '@angular/core';
import{Clientes, ListaClientes} from '../../../interfaces/clientes';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  Lista=ListaClientes;

  constructor() { }



  ngOnInit(): void {
  }

  seleccionarImagen(cl:Clientes ){
    

  }


}
