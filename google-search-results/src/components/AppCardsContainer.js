import React, { Component } from "react";
import AppCard from "./AppCard.js";

export default class AppCardsContainer extends Component {
  render() {
    return (
      <ul className="app-cards">
        {this.props.data.appCards.map(appCard => (
          <AppCard data={appCard} />
        ))}
      </ul>
    );
  }
}
