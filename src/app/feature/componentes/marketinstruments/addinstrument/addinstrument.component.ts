import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Instrument } from 'src/app/feature/shared/instrument';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addinstrument',
  templateUrl: './addinstrument.component.html',
  styleUrls: ['./addinstrument.component.css']
})
export class AddinstrumentComponent implements OnInit {

  @Output() addinstrumentEvent = new EventEmitter<Instrument>();
  
  public errormesagess: string[];
  public instrument: Instrument;

  constructor() { 
  }

  ngOnInit(): void {
        this.instrument = {"id": 0, "name": "", "symbol": "", "instrumentType": ""};
        this.errormesagess = [];
        this.errormesagess.push("Can not be emptey.");
        this.errormesagess.push("Must contain 2 chars minimum");
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
        let instrumentId = new Date().getTime();
        this.addinstrumentEvent.emit(new Instrument(instrumentId, this.instrument.name, 
          this.instrument.symbol, this.instrument.instrumentType));
          form.reset();
     } 
    
  }

}
