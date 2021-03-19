import {Product} from '../../../models/admin.model';
import {ADD_PRODUCT, ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS, AddProductAction} from '../actions/AddProduct.action';
import {
  GET_ADMIN_PRODUCTS,
  GET_ADMIN_PRODUCTS_FAILED,
  GET_ADMIN_PRODUCTS_SUCCESS,
  GetAdminProductsAction
} from '../actions/GetAdminProducts.action';
import {
  CLOSE_ALERTS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS,
  DeleteProductAction
} from '../actions/DeleteAdminProduct.action';

export interface State {
  adminProducts?: Product[];
  added?: boolean;
  deleted?: boolean;
  error?: boolean;
}

const initialState: State = {
  adminProducts: [],
  added: false,
  deleted: false,
  error: false,
};


export function AdminProductsReducer(state: State = initialState, action: AddProductAction | GetAdminProductsAction | DeleteProductAction) {
  switch (action.type) {
    case GET_ADMIN_PRODUCTS:
      return {
        ...state,
      };
    case GET_ADMIN_PRODUCTS_SUCCESS:
      return {
        ...state,
        adminProducts: action.products,
        error: false,
      };
    case GET_ADMIN_PRODUCTS_FAILED:
      return {
        ...state,
        added: false,
        error: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT_SUCCESS:
      const adminStateCopy = {...state};
      const adminProductsCopy = JSON.parse(JSON.stringify(adminStateCopy.adminProducts));
      adminProductsCopy.push(action.product)
      return {
        ...state,
        adminProducts: adminProductsCopy,
        added: true,
        error: false
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        added: false,
        error: true,
      };
    case DELETE_PRODUCT:
      return {
        ...state
      };
    case DELETE_PRODUCT_SUCCESS:
      const deleteStateCopy = {...state};
      const productsMutation = JSON.parse(JSON.stringify(deleteStateCopy.adminProducts));
      productsMutation.splice(action.productIndex, 1);
      return {
        ...state,
        deleted: true,
        error: false,
        adminProducts: productsMutation
      };
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        deleted: false,
        error: true,
      };
    case CLOSE_ALERTS:
      return {
        ...state,
        added: false,
        deleted: false,
        error: false
      };
    default:
      return state;
  }
}
