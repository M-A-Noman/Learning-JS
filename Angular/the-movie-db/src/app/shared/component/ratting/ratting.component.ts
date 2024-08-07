import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrl: './ratting.component.scss',
})
export class RattingComponent {
  @Input('ratting') value: string = 'N/A';
  @Input('mode')mode:'determinate'|'indeterminate'='determinate'
  @Input('bg-color') backgroundColor:string='rgb(50, 45, 45)';
  color:ThemePalette='warn'
}
