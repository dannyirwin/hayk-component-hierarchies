import React, { Component } from "react";
import data from "./data";
import PrimaryNavigation from "./components/PrimaryNavigation";
import SearchResultsContainer from "./components/SearchResultsContainer";

import "./App.css";

export default class App extends Component {
  state = data;
  render() {
    return (
      <div className="App">
        <PrimaryNavigation />
        <SearchResultsContainer data={data} />
      </div>
    );
  }
}
