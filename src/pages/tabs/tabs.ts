import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { ComputerPage } from '../computer/computer';
import { MascotaPage } from '../mascota/mascota';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1=HomePage;
  tab2=MascotaPage;
  tab3=ComputerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
