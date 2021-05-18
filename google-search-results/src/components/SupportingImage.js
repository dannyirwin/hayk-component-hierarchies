import React, { Component } from "react";

export default class SupportingImage extends Component {
  render() {
    return (
      <li style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}></li>
    );
  }
}
