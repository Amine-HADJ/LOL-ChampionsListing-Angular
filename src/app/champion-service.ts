import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ChampionService {
  private championsUrl = 'api/champions';

  constructor(private http: HttpClient) { }

  getChampions(): Observable<any[]> {
    return this.http.get<any[]>(this.championsUrl).pipe(
      tap(_ => console.log('fetched champions')),
      catchError(this.handleError<any[]>('getChampions', []))
    );
  }

  deleteChampion(id: number): Observable<any> {
    const url = `${this.championsUrl}/${id}`;

    return this.http.delete<any>(url).pipe(
      tap(_ => console.log(`deleted champion id=${id}`)),
      catchError(this.handleError<any>('deleteChampion'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
