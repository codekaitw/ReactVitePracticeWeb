import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";
import Title from "./Title";
import { useState, useEffect } from "react"; // react hook

export default function ProductList() {
  let [productList, setProductList] = useState([]);

  // react effect: first callback to set trigger condition
  useEffect(() => {
    // 1: if no second argument, it will run every time component re-render(change useState), it will trigger this callback
    // 2: <common use to fetch data>if second argument(Dependency Array) is empty array, it will run(render) only once, it will not trigger this callback
    // 3: <use to detect parameter change>if second argument(Dependency Array) is not empty array(have parameter), it will re-render when parameter changed.
    fetch(import.meta.env.BASE_URL + 'react-basic-product.json')
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      });
  }, []);

  return (
    <div>
      <Title mainTitle="Please choose fruits to buy" />
      {productList.map((product) => (
        <div className={styles.productBorder} key={product.id}>
          {product.name}
          <br />
          {product.price}
          <br />
          <Link to={import.meta.env.BASE_URL + "Product/" + product.id}>
            <img src={import.meta.env.BASE_URL + "/img/" + product.image}></img>
          </Link>
          <br />
          {product.description}
          <br />
        </div>
      ))}
    </div>
  );
}
