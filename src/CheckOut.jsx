import QuantityBtn from "./QuantityBtn";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function CheckOut() {
  let {cartItems} = useContext(CartContext);
  let isCartEmpty = cartItems.length <= 0;
  let grandTotal = cartItems.reduce((total, product)=>{
    return total += product.price * product.quantity;
  },0);
  const freeShippingPrice = 99;

  //console.log(carItems);
  return (
    <>
      <Title mainTitle="Your Shopping Cart" />
      {
        isCartEmpty && 
        <>
        <h2>Cart is empty</h2>
        <Link to="/ReactVitePracticeWeb">Back to Home to Buy</Link>
        </>
      }
      {!isCartEmpty && (
        <>
          <section id="cartSection">
            {/* Product List */}
            {cartItems.map((product)=>(
              <div key={product.id}>
              <img src={import.meta.env.BASE_URL + "img/" + product.image}/>
              <div>{product.quantity}</div>
              <div>{product.name}</div>
              <div>{product.description}</div>
              <div>Quantity</div>
              <QuantityBtn productInfo={product}/>
              </div>
            ))}
          </section>
          <section id="checkoutSection">
            {/* Total Price */}
            <div>Total:</div>
            <div>{grandTotal}</div>
            {/* Free Shipping */}
            { grandTotal >= freeShippingPrice ?
              <div>Free Shipping</div> :
              <div>Free Shipping for orders over ${freeShippingPrice}<br/>Buy ${freeShippingPrice - grandTotal} to get free shipping</div>
            }
          </section>
        </>
      )}
    </>
  );
}
