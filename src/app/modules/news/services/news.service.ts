import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // IMPORTANTE: Las APIs Key deberian guardarse en  variables de entorno no en variables del front que son accesibles desde el navegador
  private apiKey = '7b04fde7ad394aa8a67c335cc9e68c13';
  private baseUrl = 'https://newsapi.org/v2/';

  private modalState = new Subject<boolean>();
  modalState$ = this.modalState.asObservable();


  constructor(private http: HttpClient) { }


  showModal() {
    this.modalState.next(true);
  }

  hideModal() {
    this.modalState.next(false);
  }

  getNews(query: string, newsNumber: number, page: number, sortBy: string, sources: string[]): Observable<any> {
    return this.http.get(this.baseUrl + `everything?apiKey=${this.apiKey}&q=${query}&page=${page}&pageSize=${newsNumber}&sortBy=${sortBy}&searchIn=title&sources=${sources?.join(',')}`);
  }

  getSources(): Observable<any> {
    return this.http.get(this. baseUrl + `top-headlines/sources?apiKey=${this.apiKey}`);
  }


}
