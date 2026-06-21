import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccessibilityWidgetService } from './accessibility-widget.service';

type TextScale = 'normal' | 'large' | 'larger';

interface AccessibilitySettings {
  readonly contrast: boolean;
  readonly reduceMotion: boolean;
  readonly textScale: TextScale;
  readonly underlineLinks: boolean;
}

const defaultSettings: AccessibilitySettings = {
  contrast: false,
  reduceMotion: false,
  textScale: 'normal',
  underlineLinks: false,
};

const storageKey = 'redva-accessibility-settings';

@Component({
  selector: 'app-accessibility-widget',
  templateUrl: './accessibility-widget.html',
  styleUrl: './accessibility-widget.scss',
})
export class AccessibilityWidget implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly widgetService = inject(AccessibilityWidgetService);
  private readonly openPanelSubscription: Subscription;
  protected menuOpen = false;
  protected settings: AccessibilitySettings = this.loadSettings();

  constructor() {
    this.applySettings();
    this.openPanelSubscription = this.widgetService.openPanel$.subscribe(() => {
      this.menuOpen = true;
      window.setTimeout(() => {
        this.document.querySelector<HTMLElement>('#accessibility-panel-close')?.focus();
      });
    });
  }

  ngOnDestroy(): void {
    this.openPanelSubscription.unsubscribe();
  }

  @HostListener('document:keydown.escape')
  protected closeWithEscape(): void {
    this.menuOpen = false;
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected setTextScale(textScale: TextScale): void {
    this.updateSettings({ ...this.settings, textScale });
  }

  protected toggleContrast(): void {
    this.updateSettings({ ...this.settings, contrast: !this.settings.contrast });
  }

  protected toggleUnderlineLinks(): void {
    this.updateSettings({ ...this.settings, underlineLinks: !this.settings.underlineLinks });
  }

  protected toggleReduceMotion(): void {
    this.updateSettings({ ...this.settings, reduceMotion: !this.settings.reduceMotion });
  }

  protected resetSettings(): void {
    this.updateSettings(defaultSettings);
  }

  private updateSettings(settings: AccessibilitySettings): void {
    this.settings = settings;
    this.applySettings();
    this.saveSettings();
  }

  private applySettings(): void {
    const root = this.document.documentElement;

    root.classList.toggle('a11y-contrast', this.settings.contrast);
    root.classList.toggle('a11y-reduce-motion', this.settings.reduceMotion);
    root.classList.toggle('a11y-underline-links', this.settings.underlineLinks);
    root.classList.toggle('a11y-text-large', this.settings.textScale === 'large');
    root.classList.toggle('a11y-text-larger', this.settings.textScale === 'larger');
  }

  private loadSettings(): AccessibilitySettings {
    if (typeof localStorage === 'undefined') {
      return defaultSettings;
    }

    try {
      return { ...defaultSettings, ...JSON.parse(localStorage.getItem(storageKey) ?? '{}') };
    } catch {
      return defaultSettings;
    }
  }

  private saveSettings(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(storageKey, JSON.stringify(this.settings));
  }
}
