import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../model/tap-room.model';
@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {
  @Input() childSelectedBeer: Keg;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
  this.clickedDone.emit();
  }


  constructor() { }



}
