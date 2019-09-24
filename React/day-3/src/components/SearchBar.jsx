import React from "react";

export function SearchBar() {
  return (
    <>
      <input type="text" placeholder="Search.." />
      <label htmlFor="inStock">
        <input type="checkbox" name="inStock" id="inStock" />
        Only show products in stock
      </label>
    </>
  );
}
