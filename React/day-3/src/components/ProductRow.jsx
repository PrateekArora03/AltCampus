import React from "react";

const ProductRow = props => {
  return (
    <tr>
      <td style={!props.stocked ? { color: "red" } : {}}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
