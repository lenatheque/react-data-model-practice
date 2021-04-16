import React from "react";
import Filters from "./Filters";
import Hotels from "./Hotels";
import { filters, hotels } from "./data.js";

var App = () => (
  <div className="App">
    <Filters filters={filters} />
    <Hotels hotels={hotels} />
  </div>
);

export default App;
