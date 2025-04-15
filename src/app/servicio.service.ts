import { Injectable } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from './servicio.type';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseURL = "https://dragonball-api.com/api/characters"

  constructor(private http: Http) { }

  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseURL}`);
  }

  getCharacter(id: number): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseURL}/${id}`);
  }
}
