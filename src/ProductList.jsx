import styles from './ProductList.module.css';
import {Link} from 'react-router-dom';
import Title from './Title';

export default function ProductList() {
  let productList = [
    {
      id: 1,
      name: "Apple",
      price: 5,
      image: "apple.jpeg",
      description: "An Apple a day keeps the doctor away",
    },
    {
      id: 2,
      name: "Banana",
      price: 4,
      image: "banana.jpeg",
      description: "Bananas are good for you",
    },
    {
      id: 3,
      name: "Peach",
      price: 19,
      image: "peach.jpeg",
      description: "Peach is a good fruit",
    },
    {
      id: 4,
      name: "Watermelon",
      price: 20,
      image: "watermelon.png",
      description: "Juicy watermelon is here for you",
    },
    {
      id: 5,
      name: "Kiwi",
      price: 13,
      image: "kiwi.jpeg",
      description: "Kiwi have lots of health benefits",
    },
  ];

  return (
    <div>
      <Title mainTitle="Please choose fruits to buy"/>
      {productList.map(product =>
        (
        <div className={styles.productBorder} key={product.id}>
          {product.name}
          <br />
          {product.price}
          <br />
          <Link to={import.meta.env.BASE_URL + 'Product/' + product.id}>
          <img src={import.meta.env.BASE_URL + '/img/' + product.image}></img>
          </Link>
          <br />
          {product.description}
          <br />
        </div>
        )
      )}
    </div>
  );
}
