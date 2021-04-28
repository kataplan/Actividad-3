import {CardsComponent} from '../dashboard/cards/cards.component';
import {AddComponent} from '../dashboard/add/add.component';
import {ListComponent} from '../dashboard/list/list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {

  }
  mostrarCards(){

  }
  mostrarLista(){

  }
  mostrarAdd(){

  }
}
