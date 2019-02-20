import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';
import { FavoritosPage } from '../favoritos/favoritos';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { BuscarPage } from '../buscar/buscar';


@IonicPage()
@Component({
  selector: 'page-mascota',
  templateUrl: 'mascota.html',
})
export class MascotaPage { 
  PaginaDetalles=DetallesPage;
  PaginaFavoritos=FavoritosPage;
  PaginaBuscar=BuscarPage

  pet=[];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v3/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe(data=>{
      //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
        this.pet=data['list_ads'];
      }
    },
  error=>{
    console.log(JSON.stringify(error))
  });
  }

  verDetalles(e){
    this.navCtrl.push(this.PaginaDetalles, {empleo:e} );
  }

  verFavoritos(){
    this.navCtrl.push(this.PaginaFavoritos);
  }

  verBuscar(){
    this.navCtrl.push(this.PaginaBuscar, {search:this.pet});
}

}
