import React, { Component } from "react";

export default class AppCard extends Component {
  render() {
    return (
      <li>
        <div className="app-card">
          <a href={this.props.data.url}>
            <p>{this.props.data.content}</p>
            <p className="details">
              <span className="app">{this.props.data.app}</span>
              <time>{this.props.data.recency}</time>
            </p>
          </a>
        </div>
      </li>
    );
  }
}
