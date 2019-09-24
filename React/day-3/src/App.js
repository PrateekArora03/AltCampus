import React from "react";
import "./stylesheets/App.css";
import { SearchBar } from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default App;
