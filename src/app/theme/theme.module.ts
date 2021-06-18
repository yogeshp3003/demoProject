import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '', component: ThemeComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'post/:uid', component: PostComponent },
      { path: '', redirectTo:'list',pathMatch:'full' }
    ]
  },
];


@NgModule({
  declarations: [
    ThemeComponent,
    ListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThemeModule { }
