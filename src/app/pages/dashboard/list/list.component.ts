import { Component, OnInit } from '@angular/core';
import{Clientes, ListaClientes} from '../../../interfaces/clientes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Lista=ListaClientes;
  constructor() { }

  ngOnInit(): void {
  }

}
