import { Component, Input } from '@angular/core';
import { publicDecrypt } from 'crypto';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() nameCharacter!: string;
  @Input() idCharacter!: string;
}
