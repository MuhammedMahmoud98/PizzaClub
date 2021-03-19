import {Action} from '@ngrx/store';
import {Product} from '../../../models/admin.model';

export const GET_CART_LIST = '[Shop] GetCartList';
export const GET_CART_LIST_SUCCESS = '[Shop] GetCartListSuccess';
export const GET_CART_LIST_FAILED = '[Shop] GetCartListFailed';


export class GetCartList implements Action {
  readonly type = GET_CART_LIST;
}

export class GetCartListSuccess implements Action {
  readonly type = GET_CART_LIST_SUCCESS;
  constructor(public products: Product[]) {}
}

export class GetCartListFailed implements Action {
  readonly type = GET_CART_LIST_FAILED;
}

export type GetCartProductsAction = GetCartList | GetCartListSuccess | GetCartListFailed;
