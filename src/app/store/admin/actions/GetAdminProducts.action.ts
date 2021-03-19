import {Action} from '@ngrx/store';
import {Product} from '../../../models/admin.model';


export const GET_ADMIN_PRODUCTS = '[Admin] GetAdminProducts';
export const GET_ADMIN_PRODUCTS_SUCCESS = '[Admin] GetAdminProductsSuccess';
export const GET_ADMIN_PRODUCTS_FAILED = '[Admin] GetAdminProductsFailed';



export class GetAdminProducts implements Action {
  readonly type = GET_ADMIN_PRODUCTS;
}

export class GetAdminProductsSuccess implements Action {
  readonly type = GET_ADMIN_PRODUCTS_SUCCESS;
  constructor(public products: Product[]) {}
}

export class GetAdminProductsFailed implements Action {
  readonly type = GET_ADMIN_PRODUCTS_FAILED;
}


export type GetAdminProductsAction = GetAdminProducts | GetAdminProductsSuccess | GetAdminProductsFailed;
