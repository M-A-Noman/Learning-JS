import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'/home',pathMatch:'full'
  },
  { path:'home',
    loadChildren: ()=> import('./feature/home/home.module').then((m)=>m.HomeModule)
  },
  {
    path:':type/details/:id',
    loadChildren: ()=> import('./feature/details/details.module').then((m)=>m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
