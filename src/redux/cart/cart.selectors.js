import {createSelector} from 'reselect';

const seletCart = state => state.cart;

export const selectCartItems = createSelector(
    [seletCart],
    cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [seletCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce((accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity , 0
    )
)