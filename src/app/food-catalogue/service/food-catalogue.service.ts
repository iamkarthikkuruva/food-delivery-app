import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_FC } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodCatalogueService {

  private apiUrl = API_URL_FC + '/foodCatalogue/fetchRestaurantAndFoodItemsById/';

  constructor(private httpClient: HttpClient) { }

  getFoodItemsByRestaurant(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl + id}`)
      .pipe(
        catchError(this.handleError)
      );

  }
  private handleError(error: any) {
    console.error('An error occured:', error);
    return throwError(error.message || error);
  }

}
