import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { federations } from '../../shared/redva.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly federations = federations;
  protected readonly logoPath = 'assets/redva/logo-redva.png';
  protected readonly siteUrl = 'https://redvecinalandaluza.org/';
  protected readonly encodedSiteUrl = encodeURIComponent(this.siteUrl);
  protected readonly encodedSiteTitle = encodeURIComponent('RedVA - Red Vecinal Andaluza');
  protected readonly encodedSiteShareText = encodeURIComponent(
    'RedVA - Red Vecinal Andaluza\n\nTrabajando por una Andalucia mas justa, participativa y conectada a traves del movimiento vecinal.',
  );
}
