import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AdminService} from '../../../services/admin/admin.service';
import {GET_ADMIN_PRODUCTS, GetAdminProductsFailed, GetAdminProductsSuccess} from '../actions/GetAdminProducts.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ADD_PRODUCT, AddProductFailed, AddProductSuccess} from '../actions/AddProduct.action';
import {CloseAlerts, DELETE_PRODUCT, DeleteProductFailed, DeleteProductSuccess} from '../actions/DeleteAdminProduct.action';


@Injectable()
export class AdminEffects {
  constructor(private action$: Actions, private admin: AdminService) {
  }

  // GET PRODUCTS
   loadProducts$ = createEffect(() => this.action$.pipe(
    ofType(GET_ADMIN_PRODUCTS),
    mergeMap((action) => this.admin.getProducts()
      .pipe(
        map(productResponse => new GetAdminProductsSuccess(productResponse)),
        catchError(err => of(new GetAdminProductsFailed()))
      ))
  ));


  // ADD PRODUCT
  addProduct$ = createEffect(() => this.action$.pipe(
    ofType(ADD_PRODUCT),
    mergeMap((action) => this.admin.addProduct(action['product'])
      .pipe(
        mergeMap(response => [
          new AddProductSuccess(response),
        ]),
        catchError(err => of(new AddProductFailed())),
      ))
  ));


  // DELETE PRODUCT
  deleteProduct$ = createEffect(() => this.action$.pipe(
    ofType(DELETE_PRODUCT),
    mergeMap((action) => this.admin.deleteProduct(action['productId'])
      .pipe(
        map(response => new DeleteProductSuccess(action['productIndex'])),
        catchError(err => of(new DeleteProductFailed()))
      ))
  ));
}
