import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicio.service';
import { Characters } from './servicio.type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServicioService]
})
export class AppComponent implements OnInit {
  title = 'DBZCards';

  data: Characters[] = [];

  constructor(private r: ServicioService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.r.getCharacters().subscribe(elements => {
      this.data = elements;
      console.log(elements);
    })
  }
}
