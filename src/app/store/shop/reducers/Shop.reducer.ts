import {Product} from '../../../models/admin.model';
import {ADD_TO_CART, ADD_TO_CART_FAILED, ADD_TO_CART_SUCCESS, AddToCartActions} from '../actions/AddToCart.action';
import {GET_CART_LIST, GET_CART_LIST_FAILED, GET_CART_LIST_SUCCESS, GetCartProductsAction} from '../actions/GetCartProducts.action';


export interface ShopState {
  cart?: Product[];
  added?: boolean;
  removed?: boolean;
  error?: boolean;
}


const initialState: ShopState = {
  cart: [],
  added: false,
  removed: false,
  error: false,
};

export function ShopProductsReducer(state: ShopState = initialState, action: AddToCartActions | GetCartProductsAction) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state
      };
    case ADD_TO_CART_SUCCESS:
      const shopStateCopy = {...state};
      const cartCopy = JSON.parse(JSON.stringify(shopStateCopy.cart));
      const productCopy = action.product;
      productCopy.addedToCart = true;
      cartCopy.push(productCopy);
      return {
        ...state,
        cart: cartCopy,
        added: true,
        error: false
      };
    case ADD_TO_CART_FAILED:
      return {
        ...state,
        added: false,
        error: true
      };
    case GET_CART_LIST:
      return {
        ...state,
      };
    case GET_CART_LIST_SUCCESS:
      return {
        ...state,
        cart: action.products
      };
    case GET_CART_LIST_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }

}
