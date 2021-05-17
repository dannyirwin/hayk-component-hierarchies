import React, { Component } from "react";
import SupportingImage from "./SupportingImage";

export default class ImageBar extends Component {
  render() {
    return (
      <div className="image-bar">
        <img src={this.props.leadImageUrl} className="lead-image" alt="lead" />
        <div className="supporting-images">
          {this.props.imageThumbnailUrls.map(imageUrl => {
            return <SupportingImage imageUrl={imageUrl} />;
          })}
        </div>
      </div>
    );
  }
}
