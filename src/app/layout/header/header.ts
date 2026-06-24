import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  federationFragment,
  federations,
  navLinks,
  type Federation,
} from '../../shared/redva.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly navLinks = navLinks;
  protected readonly federations = federations;
  protected readonly logoPath = 'assets/redva/logo-redva.svg';
  protected menuOpen = false;
  protected dropdownOpen = false;
  protected dropdownClosed = false;

  @HostListener('document:click', ['$event'])
  protected closeDropdownFromDocument(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target?.closest('.nav-dropdown')) {
      this.closeDropdown();
    }
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownClosed = !this.dropdownOpen;
  }

  protected closeMenu(event?: Event): void {
    this.menuOpen = false;
    this.closeDropdown();
    (event?.currentTarget as HTMLElement | null)?.blur();
  }

  protected openDropdown(): void {
    this.dropdownClosed = false;
  }

  protected closeDropdown(): void {
    this.dropdownOpen = false;
    this.dropdownClosed = true;
  }

  protected resetDropdown(): void {
    this.dropdownClosed = false;
  }

  protected federationFragment(federation: Federation): string {
    return federationFragment(federation);
  }
}
