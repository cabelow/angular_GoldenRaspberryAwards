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

  getMovies(
    winner: string,
    year: string | undefined,
    page: number,
    size: number
  ): Observable<any> {
    let url = `${this.baseUrl}movies?page=${page}&size=${size}`;
    if (winner !== 'default') {
      url += `&winner=${winner === 'yes' ? 'true' : 'false'}`;
    }
    if (year && !isNaN(Number(year))) {
      url += `&year=${Number(year)}`;
    }
    return this.http.get(url);
  }

  get_years_with_multiple_winners(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}movies?projection=years-with-multiple-winners`
    );
  }

  get_studios_with_winners(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}movies?projection=studios-with-win-count`
    );
  }

  get_producers_with_winner_intervals(): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}movies?projection=max-min-win-interval-for-pro
ducers`);
  }

  get_movies_with_winners(year: number): Observable<any> {
    const url = `${this.baseUrl}movies?winner=true&year=${year}`;
    return this.http.get<any>(url);
  }
}
