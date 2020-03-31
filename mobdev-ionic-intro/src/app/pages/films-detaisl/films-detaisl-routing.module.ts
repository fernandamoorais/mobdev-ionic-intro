import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsDetaislPage } from './films-detaisl.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsDetaislPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsDetaislPageRoutingModule {}
