import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, type: string): SafeUrl | SafeResourceUrl {
    if (type === 'url') {
      return this.sanitizer.bypassSecurityTrustUrl(value);
    } else if (type === 'resource') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    return value;
  }
}
