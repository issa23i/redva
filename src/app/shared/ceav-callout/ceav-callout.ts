import { Component } from '@angular/core';

@Component({
  selector: 'app-ceav-callout',
  imports: [],
  template: `
    <aside class="ceav-callout">
      <a
        class="ceav-callout__link"
        href="https://www.ceavconfederacionvecinal.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/redva/logo-ceav.png" alt="CEAV" />
        <div>
          <h3>Confederaci&oacute;n Estatal de Asociaciones Vecinales</h3>
          <p>
            RedVA forma parte del movimiento vecinal estatal y traslada las reivindicaciones de las asociaciones
            andaluzas al &aacute;mbito nacional.
          </p>
        </div>
      </a>
    </aside>
  `,
})
export class CeavCallout {}
