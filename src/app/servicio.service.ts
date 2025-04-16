import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseURL = "https://dragonball-api.com/api/characters"

  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number = 15) {
    const params = new HttpParams().set('page',page.toString()).set('limit', limit.toString());
    return this.http.get<any[]>(this.baseURL, { params });
  }

  getCharacter(id: number) {
    return this.http.get<any[]>(`${this.baseURL}/${id}`);
  }
}
