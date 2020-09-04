import React from "react";

import { connect } from "react-redux";
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({
  cartItem,
  clearItem,
  increaseItemQty,
  decreaseItemQty,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => decreaseItemQty(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseItemQty(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProp = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemFromCart(item)),
  increaseItemQty: (item) => dispatch(increaseItemQuantity(item)),
  decreaseItemQty: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProp)(CheckoutItem);
