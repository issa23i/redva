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
}
