import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../model/tap-room.model';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  @Input() childBeerList: Keg[];
  @Output() clickSender = new EventEmitter;
  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellPint(currentKeg) {
    if (currentKeg.pints > 1) {
      currentKeg.pints -= 1;
    } else {
      currentKeg.pints = "No";
    }
  }


  priceColor(currentKeg) {
    if (currentKeg.price >= 6) {
      return "bg-danger";
    } else{
      return "bg-info";
    }
  }

}
