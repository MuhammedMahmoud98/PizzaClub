import {Action} from '@ngrx/store';
import {Product} from '../../../models/admin.model';


export const ADD_TO_CART = '[Shop] AddToCart';
export const ADD_TO_CART_SUCCESS = '[Shop] AddToCartSuccess';
export const ADD_TO_CART_FAILED = '[Shop] AddToCartFailed';



export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public product: Product) {}
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;
  constructor(public product: Product) {}
}

export class AddToCartFailed implements Action {
  readonly type = ADD_TO_CART_FAILED;
}

export type AddToCartActions = AddToCart | AddToCartSuccess | AddToCartFailed;

