import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from '../modal/modal.component';
import { ServicioService } from '../../servicio.service';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [ 
    CommonModule,
    CardComponent,
    ModalComponent,
    FormsModule
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
   providers: [
      ServicioService
    ],
})
export class HomeComponent implements OnInit {
  data: any;
  pageData: number = 1;
  limitData: number = 14;
  name: string = '';
  idCharacterClicked!: number;
  nameCharacterClicked!: string;
  idSelectedCharacterArray: number[] = [];
  isAdded: any = false;
  isDisabled: boolean = false;


  constructor(private request: ServicioService) { }

  ngOnInit(): void {
    this.loadData(this.pageData);
  }

  modalVisible: boolean = false;

  
  // TRAE LOS DATOS SEGUN EN LA PAGINA EN LA QUE SE ENCUENTRA
  loadData(page: number): void {
    if (this.name.trim()){
      this.request.searchCharacters(page, this.limitData, this.name.trim()).subscribe((element: any) => {
          if (element.length > 0) {
            this.data = element;
            this.pageData = 1;
          } else {
            this.data = [];
          }
      })
    } else {
      this.request.getCharacters(page, this.limitData).subscribe((elements: any) => {
        if (elements && elements.items && elements.items.length > 0) {
          this.data = elements.items;
        } else {
          this.data = [];
          this.isDisabled = true
        }
      })
    }
  }

  nextPage() {
    if (!this.isDisabled){
      this.pageData++;
      this.loadData(this.pageData)
    }
  }

  previousPage() {
    if (this.pageData > 1) {
      this.pageData--;
      this.loadData(this.pageData - 1);
    }
  }

  onInputChange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.name = filterValue;
    this.loadData(this.pageData);
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
