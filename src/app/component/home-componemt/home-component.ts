import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-home-component',
  imports: [ 
    CommonModule,
    CardComponent,
    ModalComponent,
    RouterOutlet
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
   providers: [
      ServicioService
    ],
})
export class HomeComponent implements OnInit {
  public data: any;

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
    const index = this.idSelectedCharacterArray.indexOf(id); 
    if (this.idSelectedCharacterArray.length !== 0){
       if (index === -1) {
          this.idSelectedCharacterArray.push(id);
          console.log("IDS favoritos", this.idSelectedCharacterArray);
      } else {
        this.idSelectedCharacterArray.splice(index, 1);
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
