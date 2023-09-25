import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function QuantityBtn({ productInfo }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  // check if product is in cart
  let productIndexInCart = cartItems.findIndex((item) => {
    return item.id === productInfo.id;
  });

  let [numInCart, setNumInCart] = useState(
    productIndexInCart === -1 ? 0 : cartItems[productIndexInCart].quantity
  );

  const handleAdd = () => {
    if (productIndexInCart === -1) 
    {
      setCartItems(
        [
        {
          "id": productInfo.id,
          "name": productInfo.name,
          "price": productInfo.price,
          "image": productInfo.image,
          "description": productInfo.description,
          "quantity": 1,
        },
        ...cartItems,
      ]);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity += 1;
      setCartItems(newCartArray);
    }
    setNumInCart(numInCart + 1);
  };
  const handleSub = () => {
    if (cartItems[productIndexInCart].quantity === 1) {
      let newCartArray = [...cartItems];
      newCartArray.splice(productIndexInCart, 1);
      setCartItems(newCartArray);
    } else {
      let newCartArray = [...cartItems];
      newCartArray[productIndexInCart].quantity -= 1;
      setCartItems(newCartArray);
    }
    setNumInCart(numInCart - 1);
  };
  return (
    <>
      {numInCart <= 0 ? (
        <div onClick={handleAdd}>Add to cart</div>
      ) : (
        <div>
          <span onClick={handleSub}>-</span>
          <span>{numInCart} Qty</span>
          <span onClick={handleAdd}>+</span>
        </div>
      )}
    </>
  );
}
