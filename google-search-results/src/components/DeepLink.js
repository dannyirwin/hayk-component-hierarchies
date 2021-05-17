import React, { Component } from "react";

export default class DeepLink extends Component {
  render() {
    const data = this.props.data;
    return (
      <li>
        <div className="deep-link">
          <h3>
            <a href={data.url}>{data.label}</a>
          </h3>
          <p>{data.description}</p>
        </div>
      </li>
    );
  }
}
