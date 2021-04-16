import React from "react";
import FiltersList from "./Filters/index";
import { filters } from "./data.js";

var App = () => (
  <div className="App">
    <FiltersList filters={filters} />

    <FiltersList />
  </div>
);

export default App;
