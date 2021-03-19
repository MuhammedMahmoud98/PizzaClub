// @ts-ignore
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ShopService} from '../../../services/shop/shop.service';
// @ts-ignore
import {Injectable} from '@angular/core';
import {ADD_TO_CART, AddToCartFailed, AddToCartSuccess} from '../actions/AddToCart.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {GET_CART_LIST, GetCartList, GetCartListFailed, GetCartListSuccess} from '../actions/GetCartProducts.action';

@Injectable()
export class ShopEffects {
  constructor(private action$: Actions, private shop: ShopService) {
  }
  // ADD PRODUCT TO CART
  addToCart$ = createEffect(() => this.action$.pipe(
    ofType(ADD_TO_CART),
    mergeMap((action) => this.shop.addProductToCart(action['product'])
      .pipe(
        map(product => new AddToCartSuccess(product)),
        catchError(err => of(new AddToCartFailed()))
      ))
  ));

  // GET CART LIST
  getCartList$ = createEffect(() => this.action$.pipe(
    ofType(GET_CART_LIST),
    mergeMap((action) => this.shop.getCartProducts()
      .pipe(
        map(products => new GetCartListSuccess(products)),
        catchError(err => of(new GetCartListFailed()))
      ))
  ));
}
