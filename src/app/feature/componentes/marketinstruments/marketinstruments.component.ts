import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../shared/instrument'
import { MarketinstrumentsService } from '../../services/marketinstruments.service'

@Component({
  selector: 'app-marketinstruments',
  templateUrl: './marketinstruments.component.html',
  styleUrls: ['./marketinstruments.component.css']
})
export class MarketinstrumentsComponent implements OnInit {
 
  public marketinstruments: Instrument[]; 
  public searchText: string;

  constructor(private http:MarketinstrumentsService) { 
    this.marketinstruments = []
    this.searchText = '';
  }

  ngOnInit() {
     this.http.getInstruments().subscribe(result => {
      this.marketinstruments = result
      });
  }

  public receiveAddInstrument(newInstrument) {
    this.http.addInstrument(newInstrument).subscribe(instrument => {
        if (instrument) {
          this.marketinstruments.push(instrument);
        }
    });
   }

   public deleteInstrument(instrumentId) {
    this.marketinstruments = this.marketinstruments.filter(instrument => instrument.id !== instrumentId);        
  }

   public receivedeleteInstrument(instrumentId) {
     this.http.deleteInstrument(instrumentId).subscribe( instrument => 
      {
        if (instrument === 204){
          this.deleteInstrument(instrumentId);
        }
      });
   }

}
