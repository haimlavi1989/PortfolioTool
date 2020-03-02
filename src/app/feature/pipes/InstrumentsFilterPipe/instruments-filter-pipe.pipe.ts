import { Pipe, PipeTransform } from '@angular/core';
import { Instrument } from '../../shared/instrument'

@Pipe({
  name: 'instrumentsFilterPipe'
})
export class InstrumentsFilterPipePipe implements PipeTransform {

  transform(marketinstruments: Instrument[], filterText: string) {
    if(!marketinstruments) return [];
    if(!filterText) return marketinstruments;
      
      return marketinstruments ? marketinstruments.filter( item => item.name.includes(filterText)) : [];
    
  }

}
