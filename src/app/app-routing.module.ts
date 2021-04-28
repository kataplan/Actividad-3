import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/dashboard/add/add.component';
import { ListComponent } from './pages/dashboard/list/list.component';
import { CardsComponent } from './pages/dashboard/cards/cards.component';


const routes: Routes = [
  {path:'vista-add', component:AddComponent},
  {path:'vista-list', component:ListComponent},
  {path:'vista-cards', component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
