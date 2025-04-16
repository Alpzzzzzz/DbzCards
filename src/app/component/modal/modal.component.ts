import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() nameCharacter!: string;
  @Input() idCharacter!: number;

  @Output() characterSelectedId = new EventEmitter<number>();

  pushCharacter(): void{
    this.characterSelectedId.emit(this.idCharacter);
  }
}
