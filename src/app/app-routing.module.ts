import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './formulario-carro/form.component';
import { SuccessPageComponent } from './tela-2-sucesso/page2.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'page2', component: SuccessPageComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
