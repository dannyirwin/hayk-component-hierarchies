import React, { Component } from "react";

export default class SupportingImage extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <li style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}></li>
    );
  }
}
