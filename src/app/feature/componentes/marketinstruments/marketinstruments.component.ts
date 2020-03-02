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
    this.httpSubscription1 = this.http.getInstruments().subscribe(response => {
          if (response && response.status === 200) {
            this.marketinstruments = response.body
          }
      });
  }

  public receiveAddInstrument(newInstrument) {
    this.http.addInstrument(newInstrument).subscribe(response => {
        if (response && response.status === 200) {
          this.marketinstruments.push(response.body);
        }
    });
   }

   public deleteInstrument(instrumentId) {
    this.marketinstruments = this.marketinstruments.filter(instrument => instrument.id !== instrumentId);        
  }

   public receivedeleteInstrument(instrumentId) {
     this.http.deleteInstrument(instrumentId).subscribe( response => 
      {
        if (response.status === 204) {
          this.deleteInstrument(instrumentId);
        }
      });
   }

   ngOnDestroy() {
     this.httpSubscription1.unsubscribe();
   }

}
