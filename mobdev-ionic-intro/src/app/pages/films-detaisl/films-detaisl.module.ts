import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmsDetaislPageRoutingModule } from './films-detaisl-routing.module';

import { FilmsDetaislPage } from './films-detaisl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmsDetaislPageRoutingModule
  ],
  declarations: [FilmsDetaislPage]
})
export class FilmsDetaislPageModule {}
