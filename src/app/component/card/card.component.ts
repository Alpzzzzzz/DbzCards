import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name!: string;
  @Input() id!: number;
  @Input() image!: string;
  @Input() ki!: string;
  @Input() maxKi!: string;
  @Input() race!: string;
}
