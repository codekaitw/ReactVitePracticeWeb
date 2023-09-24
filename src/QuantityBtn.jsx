import { useState } from "react"

export default function QuantityBtn() {
    let [numInCart, setNumInCart] = useState(0);

    const handleAdd = () => {
        setNumInCart(numInCart + 1);
    }
    const handleSub = () => {
        setNumInCart(numInCart - 1);
    }
  return (
    <>
    {
        (numInCart <= 0) ?
    <div onClick={handleAdd}>Add to cart</div> :
    <div>
        <span onClick={handleSub}>-</span>
        <span>{numInCart} Qty</span>
        <span onClick={handleAdd}>+</span>
    </div>
}
    </>
  )
}
