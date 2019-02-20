import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


/*
  Generated class for the FavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavProvider {

  favs=[];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavProvider Provider');
  }

  addFavoritos(e){
    this.favs.push(e);

    const toast= this.toastCtrl.create({
      message: 'Agregado a favoritos',
      duration: 1000,
      position: 'top'
    });

    toast.present();
  }

  getfavs(){
    return this.favs;
  }

}
