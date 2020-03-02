import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrument } from '../shared/instrument'
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarketinstrumentsService {
  
  private instrumentsurl = "api/instruments";
  public instrument: Instrument[] = [];

  constructor(private http: HttpClient) { }
  
  // GET: get all Instruments from database
  getInstruments() {
    return this.http.get<Instrument[]>(this.instrumentsurl);
  }

  // POST: add a new Instrument to the database
  addInstrument(instrument: Instrument) {
    return this.http.post<Instrument>(this.instrumentsurl, instrument, httpOptions);
  }

  // DELETE: delete an instrument from the database
  deleteInstrument(id: number) {
    const url = `${this.instrumentsurl}/${id}`; // DELETE api/instruments/42
    return this.http.delete(url, httpOptions);
  }

}
