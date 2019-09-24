import React from "react";
import ProductRow from "./ProductRow";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default function ProductTable() {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        <th colSpan="2">Sporting Goods</th>
        {data.map(product => (
          <ProductRow
            name={product.name}
            price={product.price}
            stocked={product.stocked}
          />
        ))}
      </tbody>
      <tbody>
        <th colSpan="2">Electronics</th>
        <tr>
          <td>iPod Touch</td>
          <td>$99.99</td>
        </tr>
        <tr>
          <td>iPhone 5</td>
          <td>$399.99</td>
        </tr>
        <tr>
          <td>Nexus 7</td>
          <td>$199.99</td>
        </tr>
      </tbody>
    </table>
  );
}
