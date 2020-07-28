export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    else {
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

export const increaseItemQuantity = (cartItems, cartItemToIncrease) => {
    
    return cartItems.map(
        cartItem => cartItem.id === cartItemToIncrease.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
    
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToDecrease.id
    );

    if(existingCartItem.quantity === 1){

        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id);
    }
    else{

        return cartItems.map(
            cartItem => cartItem.id === cartItemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }
}