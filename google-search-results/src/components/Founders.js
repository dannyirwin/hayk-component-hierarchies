import React, { Component } from "react";

export default class Founders extends Component {
  render() {
    return (
      <li>
        <dt>Founder(s):</dt>
        <dd>
          {this.props.founders.map(founder => {
            return founder.url ? (
              <a href={founder.url}>{founder.label}, </a> //TODO: Solve comma issue
            ) : (
              <span>{founder.label}</span>
            );
          })}
        </dd>
      </li>
    );
  }
}
