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
  data: any;
  idCharacterClicked!: number;
  nameCharacterClicked!: string;
  idSelectedCharacterArray: number[] = [];
  isAdded: any = false;


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

  // VERIFICA SI EXISTE EL ID DEL PERSONAJE EN LA LISTA DE IDS PERSONAJES FAVORITOS
  checkIfIdExists(id:number): boolean {
    return this.idSelectedCharacterArray.includes(id);
  }
  
  // SE EJECUTA CUANDO SE PRESIONA LA ESTRELLA Y GUARDA EL ID DEL PERSONAJE SELECCIONADO
  starClicked(idCharacterClicked: number, nameCharacterClicked: string): any {
    this.isAdded = this.checkIfIdExists(idCharacterClicked);
    this.idCharacterClicked = idCharacterClicked;
    this.nameCharacterClicked = nameCharacterClicked;
    this.modalVisible = true;
  }

  // AGREGA O ELIMINA EL ID DEL PERSONAJE DEL LISTADO
  pushSelectedCharacter(id:number){
    const index = this.idSelectedCharacterArray.indexOf(id);
      if (index === -1) {
        this.idSelectedCharacterArray.push(id);
    } else {
      this.idSelectedCharacterArray.splice(index, 1);
    }
    
  }

  cerrarModal(): void{
    this.modalVisible = false;
  }
}
