import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  imports: [RouterLink],
  templateUrl: './aviso-legal.html',
  styleUrl: './aviso-legal.scss',
})
export class AvisoLegal {
  protected readonly updatedAt = '21 junio 2026';
}
