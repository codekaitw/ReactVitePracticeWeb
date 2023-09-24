import QuantityBtn from "./QuantityBtn";
import Title from "./Title";
import { Link } from "react-router-dom";
export default function CheckOut() {
  let cartItem = [
    {
      cartItems: [
        {
          id: 2,
          name: "Banana",
          price: 4,
          image: "banana.jpeg",
          description: "Bananas are good for you",
          quantity: 3,
        },
        {
          id: 3,
          name: "Peach",
          price: 19,
          image: "peach.jpeg",
          description: "Peach is a good fruit",
          quantity: 2,
        },
        {
          id: 4,
          name: "Watermelon",
          price: 20,
          image: "watermelon.png",
          description: "Juicy watermelon is here for you",
          quantity: 1,
        },
      ],
    },
  ];

  let cartItems = cartItem[0].cartItems;
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
              <QuantityBtn />
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
