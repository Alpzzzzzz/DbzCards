import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseURL = "https://dragonball-api.com/api/characters";

  constructor(private http: HttpClient) { }

  getCharacters(page: number, limit: number = 14) {
    let params = new HttpParams()
    .set('page',page.toString())
    .set('limit', limit.toString());

    return this.http.get<any[]>(this.baseURL, { params });
  }

  searchCharacters(page: number, limit: number = 15, name: string) {

    return this.http.get<any[]>(`${this.baseURL}?page=${page}&limit=${limit}&name=${name}`);
  }

  getCharacter(id: number) {
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }
}
