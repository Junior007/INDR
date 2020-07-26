import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideMinDate'
})
export class HideMinDatePipe implements PipeTransform {

  transform(date: string): string {
    if(date === '01/01/0001'){
      return '';
    }
    else{
      return date;
    }
  }

}
