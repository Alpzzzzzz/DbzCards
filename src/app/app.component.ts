import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicio.service';
import { CommonModule, NgFor } from '@angular/common';
import { CardComponent } from "./component/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServicioService]
})
export class AppComponent implements OnInit {
  title = 'Cards DBZ';

  data: any;

  constructor(private request: ServicioService) { }

  ngOnInit(): void {
    this.loadData();
  }


  // FALTA VALIDAR

  loadData(): void {
    this.request.getCharacters().subscribe((elements: any) => {
      this.data = elements.items;
      console.log(this.data);
    })

  }
}
