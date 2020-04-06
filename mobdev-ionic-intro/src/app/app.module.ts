import {NgModule} from '@angular/core';
import {PreloadAllModules,RouterModule, RouteReuseStrategy,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [{
path: '',
loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
}];
/** @NgModule({
imports: [
RouterModule.forRoot(routes, {
preloadingStrategy: PreloadAllModules
})
],
exports: [RouterModule]
})
export class AppRoutingModule {}*/
	
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}