import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-character',
  imports: [CommonModule],
  templateUrl: './details-character.component.html',
  styleUrl: './details-character.component.css',
  providers: [ServicioService],
})
export class DetailsCharacterComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  charactedId!: number;
  data: any;
  transformations: any;

  constructor(private request: ServicioService){
    this.charactedId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.loadData(this.charactedId);
  }

  loadData(id: number): void {
    this.request.getCharacter(id).subscribe((element:any) => {
      this.data = element;
      console.warn(this.data.transformations);
    })
  }
}
