import React from "react";
import "./Product.css";

export function Product({ product }) {
  //   const stock = (
  //     <span
  //       className={`product-details__stock ${
  //         product.inStock
  //           ? "product-details__stock--available"
  //           : "product-details__stock--unavailable"
  //       }`}>
  //       {product.inStock ? "This product is in stock" : "Out of stock"}
  //     </span>
  //   );

  //   return (
  //     <div className="product-details">
  //       <span className="product-details__name">{product.name}</span>

  //       {stock}

  //       <span className="product-details__price">
  //         Price: ${product.price || "The price is unavailable"}
  //       </span>
  //     </div>
  //   );
  //=========================================================================

  if (!product.inStock) {
    return (
      <span className="product-details__stock product-details__stock--unavailable">
        Out of stock
      </span>
    );
  }

  return (
    <div className="product-details">
      <span className="product-details__name">{product.name}</span>

      <span className="product-details__price">
        Price: ${product.price || "The price is unavailable"}
      </span>
    </div>
  );
}
