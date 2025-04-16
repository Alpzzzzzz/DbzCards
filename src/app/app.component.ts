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
    //console.log("clickeaste: ", idCardClicked);
  }

  public idCharacterClicked!: number;
  public nameCharacterClicked!: string;

  starClicked(idCharacterClicked: number, nameCharacterClicked: string): any {
    this.idCharacterClicked = idCharacterClicked;
    this.nameCharacterClicked = nameCharacterClicked;
    this.modalVisible = true;
  }

  idSelectedCharacterArray: number[] = [];

  pushSelectedCharacter(id:number){
    if (this.idSelectedCharacterArray.length !== 0){
       if (!this.idSelectedCharacterArray.find((idArray) => idArray === id)) {
          this.idSelectedCharacterArray.push(id);
          console.log("IDS favoritos", this.idSelectedCharacterArray);
      }
    } else {
      this.idSelectedCharacterArray.push(id);
      console.log("xd");
    }
  }

  cerrarModal(): void{
    this.modalVisible = false;
  }
}
