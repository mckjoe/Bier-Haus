import { Component } from '@angular/core';
import { Keg } from './model/tap-room.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bier Haus';
  kegs: Keg[] = [
    new Keg("Na Zdravi Pils", "Southern Oregon", 4.8, 5),
    new Keg("Kolsch", "Occidental", 4.4, 5),
    new Keg("Sterling Pils", "Ninkasi", 5.1, 6),
    new Keg("Omission Lager", "Widmer Bros.", 4.6, 5),
    new Keg("River Ale", "Deschutes", 4, 5),
    new Keg("Chainbreaker White IPA", "Deschutes", 5.6, 6),
  ];
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  priceColor(currentKeg) {
    if (currentKeg.price >= 6) {
      return "bg-danger";
    } else{
      return "bg-info";
    }
  }

  finishedEditing() {
  this.selectedKeg = null;
  }

  sellPint(currentKeg) {
    currentKeg.pints -= 1;
  }
}
