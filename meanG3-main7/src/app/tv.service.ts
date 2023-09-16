import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TvService {
  api: string = 'cdac72a63788a316660f50824cbcbb08';
  // https://api.themoviedb.org/3/tv/top_rated
  allMovies: any[] = [];
  constructor(private http: HttpClient) {}

  getAllMovies(
    pageNumber: number = 1,
    language: string = 'en-US'
  ): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getMovieById(movieId: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${this.api}
    `);
  }

  searchAllMovie(movieName: string): Observable<any> {
    if (movieName == '') {
      return this.getAllMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.api}&query=${movieName}`
      );
    }
  }
}
