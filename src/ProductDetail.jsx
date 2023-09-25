import {useParams, Link} from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';
import { useState, useEffect } from 'react';

export default function ProductDetail() {

  let params = useParams();
  let [ProductDetail, setProductDetail] = useState([]);

  // react effect: first callback to set trigger condition
  useEffect(() => {
    // 1: if no second argument, it will run every time component re-render(change useState), it will trigger this callback
    // 2: <common use to fetch data>if second argument(Dependency Array) is empty array, it will run(render) only once, it will not trigger this callback
    // 3: <use to detect parameter change>if second argument(Dependency Array) is not empty array(have parameter), it will re-render when parameter changed.
    fetch(import.meta.env.BASE_URL + 'react-basic-product.json')
      .then((response) => response.json())
      .then((data) => {
        let productInfo = data.find((element) =>{
          return element.id === parseInt(params.id)
        })
        setProductDetail(productInfo);
      });
  }, []);

  //const {cartItems} = useContext(CartContext);

  return (
    <div>
      <Title mainTitle={ProductDetail.name+ "Product Detail"}/>
      <img src={import.meta.env.BASE_URL + "img/" + ProductDetail.image} alt={ProductDetail.name}></img>
      <p>Name: {ProductDetail.name}</p>
      <p>Price: {ProductDetail.price}</p>
      <p>Description: {ProductDetail.description}</p>
      <QuantityBtn productInfo={ProductDetail}/>
      <Link to={import.meta.env.BASE_URL}>Back to Home</Link>
    </div>
  )
}
