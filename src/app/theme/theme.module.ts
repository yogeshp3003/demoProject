import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '', component: ThemeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: '', redirectTo:'list',pathMatch:'full' }
    ]
  },
];


@NgModule({
  declarations: [
    ThemeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemeModule { }
