import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-character',
  imports: [],
  templateUrl: './details-character.component.html',
  styleUrl: './details-character.component.css'
})
export class DetailsCharacterComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  charactedId!: number;

  constructor(){
    this.charactedId = Number(this.route.snapshot.params);
  }
}
