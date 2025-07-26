import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStateService {
  private readonly _showSideBar = signal<boolean>(true);

  public readonly showSideBar = computed(() => this._showSideBar());

  public toggleSidebar(): void {
    this._showSideBar.update((current) => !current);
  }

}
