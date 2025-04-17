import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ServicioService } from '../../servicio.service';

@Component({
  selector: 'app-home-component',
  imports: [ 
    CommonModule,
    CardComponent,
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
  isDisabled: boolean = false;


  constructor(private request: ServicioService) { }

  ngOnInit(): void {
    this.loadData(this.pageData);
  }


  // TRAE LOS DATOS SEGUN EN LA PAGINA EN LA QUE SE ENCUENTRA
  loadData(page: number): void {
    if (this.name.trim()){
      this.request.searchCharacters(page, this.limitData, this.name.trim()).subscribe((element: any) => {
          if (element.length > 0) {
            this.data = element;
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
      this.loadData(this.pageData);
    }
  }

  previousPage() {
    if (this.pageData > 1) {
      this.pageData--;
      this.loadData(this.pageData);
    }
  }

  onInputChange(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.name = filterValue;
  }
 }
