import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Instrument } from '../../../shared/instrument'

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent {

  @Input('instrument') instrument: Instrument;
  @Output() deletInstrumentEvent = new EventEmitter<number>();

  public deletInstrument(instrumentId) { 
    this.deletInstrumentEvent.emit(instrumentId);
   }

}
