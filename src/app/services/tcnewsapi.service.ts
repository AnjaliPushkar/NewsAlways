import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) { }

  //top headline API  URL
  topHeadLineNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  healthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0e0647fc632d4c87bd10129c69a7d971';

  tcHeadlines(): Observable<any>{
    return this._http.get(this.topHeadLineNews);
  }

  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }

  sportsHeadlines(): Observable<any>{
    return this._http.get(this.sportsNews);
  }

  healthHeadlines(): Observable<any>{
    return this._http.get(this.healthNews);
  }

  entertainmentHeadlines(): Observable<any>{
    return this._http.get(this.entertainmentNews);
  }
}
