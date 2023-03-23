import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private url: string = 'https://restcountries.com/v3.1';

  get httpParams() {

    return new HttpParams().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.url}/name/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.url}/capital/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  getPaisCodigo(id: string): Observable<Country> {
    const url = `${this.url}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  getPaisesRegion(region: string): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.http.get<Country[]>(url, { params:this.httpParams }).pipe(tap(console.log));
  }
}
