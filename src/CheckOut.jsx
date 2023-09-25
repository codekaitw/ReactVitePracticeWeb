import QuantityBtn from "./QuantityBtn";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function CheckOut() {
  let { cartItems } = useContext(CartContext);
  let isCartEmpty = cartItems.length <= 0;
  let grandTotal = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);
  const freeShippingPrice = 99;

  //console.log(carItems);
  return (
    <>
      <Title mainTitle="Your Shopping Cart" />
      {isCartEmpty && (
        <>
          <div className="nothingInCart">Cart is empty</div>
          <Link to="/ReactVitePracticeWeb">
            <button>Go to Buy</button>
          </Link>
        </>
      )}
      {!isCartEmpty && (
        <>
          <div className="container">
            <div className="cartSection">
              <table className="checkoutTable">
                {/* Product List */}
                <tbody>
                  {cartItems.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <Link
                          to={
                            import.meta.env.BASE_URL + "Product/" + product.id
                          }
                        >
                          <img
                            src={
                              import.meta.env.BASE_URL + "img/" + product.image
                            }
                          />
                        </Link>
                      </td>
                      <td>
                        <p>{product.quantity}</p>
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                      </td>
                      <td width="200">
                        <QuantityBtn productInfo={product} />
                      </td>
                      <td>
                        <div className="productSubTotal">
                          ${product.price * product.quantity}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <section className="checkoutSection">
              {/* Total Price */}
              <div>Total:</div>
              <div className="grandTotal">{grandTotal}</div>
              {/* Free Shipping */}
              {grandTotal >= freeShippingPrice ? (
                <div className="freeShipping">Free Shipping</div>
              ) : (
                <div className="noShipping">
                  Free Shipping for orders over ${freeShippingPrice}
                  <br />
                  Buy ${freeShippingPrice - grandTotal} to get free shipping
                </div>
              )}
              <button>Checkout</button>
            </section>
          </div>
        </>
      )}
    </>
  );
}
