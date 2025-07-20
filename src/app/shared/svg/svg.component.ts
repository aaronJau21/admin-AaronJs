import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'svg-icon',
  imports: [],
  template: ` <span [innerHTML]="svgContent()"></span> `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SvgComponent implements OnChanges {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  public name = input.required<string>();
  public svgContent = signal<SafeHtml | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (this.name()) {
      const path = `/icons/${this.name()}.svg`;
      this.http.get(path, { responseType: 'text' }).subscribe({
        next: (svg) => {
          this.svgContent.set(this.sanitizer.bypassSecurityTrustHtml(svg));
        },
        error: (err) => {
          console.error(`Error loading SVG: ${err}`);
          this.svgContent.set(null);
        },
      });
    }
  }
}
