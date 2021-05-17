import React, { Component } from "react";
import AppCardsContainer from "./AppCardsContainer";
import DeepLink from "./DeepLink";
import DeepLinksContainer from "./DeepLinksContainer";

export default class SearchResult extends Component {
  render() {
    return (
      <li>
        <div className="search-result">
          <h3>
            <a href={this.props.data.url}>{this.props.data.label}</a>
          </h3>
          <p className="url">{this.props.data.url}</p>
          <p className="description">{this.props.data.description}</p>
          <p className="last-visit">
            You've visited this page many times. Last visit: 12/16/19{" "}
            {this.props.data.lastVisit}
            {/*TODO: FIX date to be  12/16/19 format */}
          </p>

          {this.props.data.deepLinks ? (
            <DeepLinksContainer data={this.props.data} />
          ) : this.props.data.appCards ? (
            <AppCardsContainer data={this.props.data} />
          ) : (
            console.log("Nothing here")
          )}
        </div>
      </li>
    );
  }
}
