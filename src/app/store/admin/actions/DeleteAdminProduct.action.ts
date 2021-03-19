import {Action} from '@ngrx/store';


export const DELETE_PRODUCT = '[Admin] DeleteProduct';
export const DELETE_PRODUCT_SUCCESS = '[Admin] DeleteProductSuccess';
export const DELETE_PRODUCT_FAILED = '[Admin] DeleteProductFailed';
export const CLOSE_ALERTS = '[Admin] CloseAlerts';

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public productId: number | any, public productIndex: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;
  constructor(public productIndex: number) {}
}

export class DeleteProductFailed implements Action {
  readonly type = DELETE_PRODUCT_FAILED;
}

export class CloseAlerts implements Action {
  readonly type = CLOSE_ALERTS;
}

export type DeleteProductAction = DeleteProduct | DeleteProductSuccess | DeleteProductFailed | CloseAlerts;
