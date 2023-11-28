import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'funcionarios'},
  {path:'funcionarios', loadChildren:()=> FuncionariosModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
