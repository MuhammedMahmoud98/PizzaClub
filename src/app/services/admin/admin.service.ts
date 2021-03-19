import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../models/admin.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

//  ************* GET PRODUCTS ************* //
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}products`);
  }

  //  ************* ADD PRODUCTS ************* //
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}products`, product);
  }

  //  ************* DELETE PRODUCTS ************* //
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}products/${productId}`);
  }
}
