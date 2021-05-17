import React, { Component } from "react";
import DeepLink from "./DeepLink";

export default class DeepLinksContainer extends Component {
  render() {
    return (
      <div className="deep-links">
        <ul>
          {this.props.data.deepLinks.map(linkData => {
            return <DeepLink data={linkData} />;
          })}
        </ul>
        <p className="more-links">
          <a href="https://www.google.com?q=+site:https://flatironschool.com+Flatiron+School">
            {/* TODO: maybe fix ^^ to be dynamic url*/}
            More results from {this.props.data.url} »
          </a>
        </p>
      </div>
    );
  }
}
