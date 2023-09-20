import React from "react";
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
      image: "watermelon.jpeg",
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
      {productList.map(product =>
        (
        <div key={product.id}>
          {product.name}
          <br />
          {product.price}
          <br />
          <img src={process.env.PUBLIC_URL + '/img/' + product.image}></img>
          <br />
          {product.description}
          <br />
        </div>
        )
      )}
    </div>
  );
}
