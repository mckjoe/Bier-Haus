import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../model/tap-room.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();
  submitForm(name: string, brand: string, abv: string, price: string, pints: number) {
    let newKeg: Keg = new Keg(name, brand, parseInt(abv), parseInt(price));
    this.sendKeg.emit(newKeg);
  }
  constructor() { }



}
