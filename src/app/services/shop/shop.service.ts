import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/admin.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {
  }

  //  ADD TO CART
  addProductToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}cart`, product);
  }

  // GET CART LIST
  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}cart`);
  }

  // REMOVE FROM CART
  removeProductFromCart(productId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}cart/${productId}`);
  }
}
