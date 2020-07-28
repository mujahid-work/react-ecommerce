import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TYPE_TOGGLE_CART_HIDDEN
});

export const addItem = item => ({

    type: CartActionTypes.TYPE_ADD_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({

    type: CartActionTypes.TYPE_REMOVE_ITEM_FROM_CART,
    payload: item
});

export const increaseItemQuantity = item => ({
    type: CartActionTypes.TYPE_INCREASE_ITEM_QUANTITY,
    payload: item
});

export const decreaseItemQuantity = item => ({
    type: CartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: item
});