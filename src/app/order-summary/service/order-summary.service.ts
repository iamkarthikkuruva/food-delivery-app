import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_Order } from '../../constants/url';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  private apiUrl = API_URL_Order + '/order/saveOrder';

  constructor(private httpClient: HttpClient) { }

  saveOrer(data: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, data);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200' //replace with your angular app url
    })
  };

  private handlerError(error: any) {
    console.error('An error occured:', error);
    return throwError(error.message || error);
  }
}
