import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccessibilityWidgetService {
  private readonly openPanelSubject = new Subject<void>();
  readonly openPanel$ = this.openPanelSubject.asObservable();

  openPanel(): void {
    this.openPanelSubject.next();
  }
}
