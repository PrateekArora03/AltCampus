import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";

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

// const category = data.reduce((acc,cv)=>{
//   (acc[cv.category]=)
// },{})
// console.log(category);

export default function ProductTable() {
  return (
    <table>
      <ProductCategoryRow
        product={data.filter(product => product.category === "Electronics")}
        category="Electronics"
      />
      <ProductCategoryRow
        product={data.filter(product => product.category === "Sporting Goods")}
        category="Sporting Goods"
      />
    </table>
  );
}
