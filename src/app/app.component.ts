import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./component/card/card.component";
import { ModalComponent } from './component/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ServicioService]
})
export class AppComponent implements OnInit {

  data: any;

  constructor(private request: ServicioService) { }

  ngOnInit(): void {
    this.loadData();
  }

  modalVisible: boolean = false;

  // FALTA VALIDAR QUE SI NO TRAE DATOS ALMACENE ALGO VACIO

  loadData(): void {
    this.request.getCharacters().subscribe((elements: any) => {
      this.data = elements.items;
    })
  }

  cardClicked(idCardClicked: number): any {
    console.log("clickeaste: ", idCardClicked);
  }

  starClicked(idCharacterClicked: number, nameCharacterClicked: string): any {
    this.modalVisible = true;
    console.log("Modal abierto con name: ", nameCharacterClicked);
    console.log("Modal abierto con id: ", idCharacterClicked)
  }

  cerrarModal(): void{
    this.modalVisible = false;
  }
}
