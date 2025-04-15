import { Injectable } from '@angular/core';
import { HttpClient as Http } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseURL = "https://dragonball-api.com/api/characters"

  constructor(private http: Http) { }

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}`);
  }

  getCharacter(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/${id}`);
  }
}
