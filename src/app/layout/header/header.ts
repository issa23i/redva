import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { federations, navLinks } from '../../shared/redva.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly navLinks = navLinks;
  protected readonly federations = federations;
  protected readonly logoPath = 'assets/redva/logo-redva.png';
  protected menuOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
