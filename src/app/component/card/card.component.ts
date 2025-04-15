import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() cardClicked = new EventEmitter<number>();
  @Output() starClicked = new EventEmitter<{name: string, id: number}>();

  onClickCard(id:number): any {
    this.cardClicked.emit(id);
  }

  onClickStar(event: MouseEvent): void {
    event.stopPropagation;
    this.starClicked.emit({name: this.name, id: this.id});
  }
}
