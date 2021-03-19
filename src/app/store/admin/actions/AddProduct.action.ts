import {Action} from '@ngrx/store';
import {Product} from '../../../models/admin.model';

export const ADD_PRODUCT = '[Admin] AddProduct';
export const ADD_PRODUCT_SUCCESS = '[Admin] AddProductSuccess';
export const ADD_PRODUCT_FAILED = '[Admin] AddProductFailed';





export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public product: Product) {}
}

export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;
  constructor(public product: Product) {}
}

export class AddProductFailed implements Action {
  readonly type = ADD_PRODUCT_FAILED;
}

export type AddProductAction = AddProduct | AddProductSuccess | AddProductFailed;
