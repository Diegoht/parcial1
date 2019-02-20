import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallesPage } from '../detalles/detalles';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  PaginaDetalles=DetallesPage;

  search=[];
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.search=this.navParams.get('search');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev:any){
    console.log(ev.target.value);

    this.items=this.search.filter(search =>{
      return search.ad.subject.toLowerCase().includes( ev.target.value.toLowerCase())
    })
  }

  verDetalles(e){
    this.navCtrl.push(this.PaginaDetalles, {empleo:e} );
  }

}
