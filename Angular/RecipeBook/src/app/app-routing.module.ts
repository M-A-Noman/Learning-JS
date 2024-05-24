import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { shoppingListComponent } from './shopping-list/shopping-list.component';

import { AuthComponent } from './Auth/auth.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes', pathMatch:'full'},
  ,
  
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
