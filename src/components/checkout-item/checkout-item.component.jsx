import React from 'react'
import './checkout-item.styles.scss';

import {connect} from 'react-redux';
import {removeItemFromCart, increaseItemQuantity, decreaseItemQuantity} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem,clearItem,increaseItemQty,decreaseItemQty}) => {
    const {name,imageUrl,price,quantity} = cartItem;

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseItemQty(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseItemQty(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
)};

const mapDispatchToProp = dispatch => ({
    clearItem: item => dispatch(removeItemFromCart(item)),
    increaseItemQty: item => dispatch(increaseItemQuantity(item)),
    decreaseItemQty: item => dispatch(decreaseItemQuantity(item))
});

export default connect(null,mapDispatchToProp)(CheckoutItem);