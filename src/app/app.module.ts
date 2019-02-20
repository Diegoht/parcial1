import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {HttpClientModule} from '@angular/common/http';
import { DetallesPage } from '../pages/detalles/detalles';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavProvider } from '../providers/fav/fav';
import { TabsPage } from '../pages/tabs/tabs';
import { ComputerPage } from '../pages/computer/computer';
import { MascotaPage } from '../pages/mascota/mascota';
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallesPage, 
    FavoritosPage,
    TabsPage,
    ComputerPage,
    MascotaPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallesPage, 
    FavoritosPage,
    TabsPage,
    ComputerPage,
    MascotaPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavProvider
  ]
})
export class AppModule {}
