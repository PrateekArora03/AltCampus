import React from "react";
import ProductRow from "./ProductRow";

export default function ProductCategoryRow(props) {
  const { product } = props;
  console.log(product);
  return (
    <tbody>
      <th colSpan="2">{props.category}</th>
      {product.map(product => (
        <ProductRow
          name={product.name}
          price={product.price}
          stocked={product.stocked}
        />
      ))}
    </tbody>
  );
}
