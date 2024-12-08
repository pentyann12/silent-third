import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { News } from '../domain/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopPageService {

  /** constructor of {@link TopPageService}. */
  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) { }

  public fetchNews(): Observable<Array<News>> {
    return this.http.get<Array<News>>('/api/news');
  }
}
