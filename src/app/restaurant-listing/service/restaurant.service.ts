import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = API_URL_RL + '/restaurant/fetchAllRestaurants';

  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occured:', error);
    return throwError(error.message || error);
  }

}