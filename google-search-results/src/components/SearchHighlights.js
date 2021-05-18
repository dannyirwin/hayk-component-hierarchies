import React, { Component } from "react";
import ImageBar from "./ImageBar";
import Overview from "./Overview";
import Details from "./Details";
import Profiles from "./Profiles";
import RelatedSearches from "./RelatedSearches";

export default class SearchHighlights extends Component {
  render() {
    return (
      <section className="search-highlights">
        <header>
          <ImageBar
            leadImageUrl={this.props.data.leadImageUrl}
            imageThumbnailUrls={this.props.data.imageThumbnailUrls}
          />
          <Overview
            title={this.props.data.title}
            subTitle={this.props.data.subTitle}
          />
        </header>
        <main>
          <Details data={this.props.data} />
          <Profiles profiles={this.props.data.profiles} />
          <RelatedSearches results={this.props.data.otherResults} />
        </main>
      </section>
    );
  }
}
