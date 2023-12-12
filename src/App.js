import React from "react";
import "./App.css";
import { Product } from "./Product";

//   const List = (item) => <Product product={item} />;
const List = ({ list }) =>
  list.map((item) => <Product key={item.id} product={item} />);

function App() {
  //   const product = {
  //     name: "IPhone 14",
  //     price: 999,
  //     inStock: true,
  //   };

  //   return (
  //     <div className="App">
  //       <h1>Product page</h1>
  //       <Product product={product} />
  //     </div>
  //   );

  const data = [
    {
      id: 1,
      name: "IPhone 13",
      price: 999,
      inStock: true,
    },
    {
      id: 2,
      name: "IPhone 14",
      price: 1099,
      inStock: true,
    },
    {
      id: 3,
      name: "IPhone 15",
      price: null,
      inStock: false,
    },
  ];

  //   const list = data
  //     .filter((item) => item.inStock)
  //     .map((item) => <Product product={item} />);

  //   console.log(list);

  return (
    <div className="App">
      <h1>Product page</h1>

      {/* {data.map((item) => (
        <Product product={item} />
      ))} */}

      {/* {data.map(List)} */}

      {/* {list} */}

      <List list={data} />
    </div>
  );
}

export default App;
