import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DetallesPage } from '../detalles/detalles';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';


@IonicPage()
@Component({
  selector: 'page-computer',
  templateUrl: 'computer.html',
})
export class ComputerPage {

  PaginaDetalles=DetallesPage;
  PaginaFavoritos=FavoritosPage;
  PaginaBuscar=BuscarPage;

  compu=[];
  imgs=[];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v2/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data=>{
      console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
        this.compu=data['list_ads'];
      }
      if(data.hasOwnProperty('images')){
        this.imgs=data['images']
      }
    },
  error=>{
    console.log(JSON.stringify(error))
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputerPage');
  }

  verDetalles(e){
    this.navCtrl.push(this.PaginaDetalles, {empleo:e} );
  }

  verFavoritos(){
    this.navCtrl.push(this.PaginaFavoritos);
  }

  verBuscar(){
    this.navCtrl.push(this.PaginaBuscar, {search:this.compu});
}
}
