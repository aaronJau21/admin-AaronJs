import { Component, computed, inject, signal } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'theme-button',
  imports: [SvgComponent],
  template: `
    <button class="cursor-pointer mt-1" (click)="toggleTheme()">
      @if (theme() === 'dark') {
      <svg-icon name="luna" />
      } @else {
      <svg-icon name="sol" />
      }
    </button>
  `,
})
export class ThemeButtonComponent {
  private readonly themeService = inject(ThemeService);
  public readonly theme = signal<string>(
    localStorage.getItem('theme') || 'dark'
  );

  toggleTheme() {
    this.theme.set('dark' === this.theme() ? 'light' : 'dark');
    this.themeService.toggleTheme();
  }
}
