import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent {
  @Input() listitem:any[]=[]

  sanitizedUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Sanitize all video links when the component initializes
    this.sanitizedUrls = this.listitem.map(item => this.sanitizer.bypassSecurityTrustResourceUrl(item.videoLink));
  }

}
