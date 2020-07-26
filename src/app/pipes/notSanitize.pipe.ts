import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'notSanitize'
  , pure: false 
})
export class NotSanitizePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
