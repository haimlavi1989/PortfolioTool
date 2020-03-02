import { Component, OnInit, OnDestroy } from '@angular/core';
import { Instrument } from '../../shared/instrument'
import { MarketinstrumentsService } from '../../services/marketinstruments.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marketinstruments',
  templateUrl: './marketinstruments.component.html',
  styleUrls: ['./marketinstruments.component.css']
})
export class MarketinstrumentsComponent implements OnInit, OnDestroy {
 
  public marketinstruments: Instrument[]; 
  public searchText: string;
  private httpSubscription1: Subscription;

  constructor(private http:MarketinstrumentsService) { 
    this.marketinstruments = []
    this.searchText = '';
  }

  ngOnInit() {
    this.httpSubscription1 = this.http.getInstruments().subscribe(result => {
          if (result) {
            this.marketinstruments = result
          }
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
        if (instrument === 204) {
          this.deleteInstrument(instrumentId);
        }
      });
   }

   ngOnDestroy() {
     this.httpSubscription1.unsubscribe();
   }

}
