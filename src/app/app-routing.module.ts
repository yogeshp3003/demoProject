import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './theme/list/list.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeModule } from './theme/theme.module';


const routes: Routes = [
  // {path: '' , component : ThemeComponent},
  // {path: 'list' , component : ListComponent}
  {path: '' ,loadChildren:()=> ThemeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
