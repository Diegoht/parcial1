import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';
import { DetallesPage } from '../detalles/detalles';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  
  PaginaDetalles=DetallesPage;
items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav:FavProvider) {
    this.items=this.fav.getfavs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  verDetalles(e){
    this.navCtrl.push(this.PaginaDetalles, {empleo:e} );
  }
}
