import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { NewKegComponent } from './new-keg/new-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    EditBeerComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
