import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { DetallesPage } from '../detalles/detalles';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  PaginaDetalles=DetallesPage;
  PaginaFavoritos=FavoritosPage;
  PaginaBuscar=BuscarPage;

  empleos=[];

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
    .subscribe(data=>{
      //console.log(JSON.stringify(data));
      if(data.hasOwnProperty('list_ads')){
        this.empleos=data['list_ads'];
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
      this.navCtrl.push(this.PaginaBuscar, {search:this.empleos});
  }

}
