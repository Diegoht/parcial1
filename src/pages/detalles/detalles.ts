import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';



@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

    e=[];
    imgs=[];
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavProvider) {
    this.e=this.navParams.get('empleo');
    if(this.e.ad.hasOwnProperty('images') ) {
        this.imgs=this.e.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

  addFavoritos(e){
    console.log('hola');
    this.fav.addFavoritos(e);
  }

}
