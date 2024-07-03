import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path:'admission-circular',loadChildren:()=>import('./admission-circular/admission-circular.module').then(m=>m.AdmissionCircularModule)}
  ,
  {
    path:'admission-form',loadChildren:()=>import('./admission-form/admission-form.module').then(m=>m.AdmissionFormModule)
  },
  {
    path:'payment-instruction',loadChildren:()=>import('./payment-instruction/payment-instruction.module').then(m=>m.PaymentInstructionModule)
  },
  {
    path:'admission-result',loadChildren:()=>import('./admission-result/admission-result.module').then(m=>m.AdmissionResultModule)
  },
  {
    path: 'results', loadChildren:()=> import('./result/result.module').then(m=>m.ResultModule)
  },
  {
    path:'posts',loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
