import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarketinstrumentsComponent } from './feature/componentes/marketinstruments/marketinstruments.component';
import { InstrumentComponent } from './feature/componentes/marketinstruments/instrument/instrument.component';
import { InstrumentsFilterPipePipe } from './feature/pipes/InstrumentsFilterPipe/instruments-filter-pipe.pipe';
import { AddinstrumentComponent } from './feature/componentes/marketinstruments/addinstrument/addinstrument.component';


@NgModule({
  declarations: [
    AppComponent,
    MarketinstrumentsComponent,
    InstrumentComponent,
    InstrumentsFilterPipePipe,
    AddinstrumentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
