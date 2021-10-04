import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component'
import { UpdateComponent } from './update/update.component'
import { ListComponent } from './list/list.component'

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
  // {
  //   path: 'update',
  //   component: UpdateComponent
  // },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
