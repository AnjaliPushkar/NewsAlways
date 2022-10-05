import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) { }

  //top headline API  URL
  topHeadLineNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  tcHeadlines(): Observable<any>{
    return this._http.get(this.topHeadLineNews);
  }
}
