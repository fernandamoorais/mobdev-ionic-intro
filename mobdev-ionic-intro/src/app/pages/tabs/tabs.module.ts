import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
import { TabsPageRouterModule } from './tabs-page-router.module';
@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
TabsPageRouterModule,
],
declarations: [TabsPage]
})
export class TabsPageModule {}