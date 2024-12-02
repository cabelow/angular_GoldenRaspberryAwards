import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getMovies(winner: string, year: string | undefined, page: number, size: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    let url = `${this.baseUrl}core/movies/?page=${page}&size=${size}`;
    if (winner !== 'default') {
      url += `&winner=${winner === 'yes' ? 'true' : 'false'}`;
    }
    if (year && !isNaN(Number(year))) {
      url += `&year=${Number(year)}`;
    }
    return this.http.get(url, { headers });
  }

  get_years_with_multiple_winners(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.baseUrl}core/movies/years/multiple-winners/`, { headers });
  }
  
  get_studios_with_winners(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.baseUrl}core/movies/studios-winners/`, { headers });
  }

  get_producers_with_winner_intervals(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.baseUrl}core/movies/producers-winners/`, { headers });
  }

  get_movies_with_winners(year: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const number_year = parseInt(year, 10);
    const url = `${this.baseUrl}core/movies/year-with-winners/?winner=true&year=${number_year}`;
    return this.http.get<any>(url, { headers });
  }

}
