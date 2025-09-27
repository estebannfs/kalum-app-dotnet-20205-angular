import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Sidenav } from './sidenav/sidenav';
import { Menu } from './menu/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    Menu,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    Sidenav
  ],
  templateUrl: './layout.html',
  styles: ``
})
export class Layout {
  isSideNavOpen = signal(false);

toggleSideNav() {
  this.isSideNavOpen.update(v => !v);
}

}
