import React, { Component } from "react";
import QuestionAnswersContainer from "./QuestionAnswersContainer";
import SearchHighlights from "./SearchHighlights";
import SearchResult from "./SearchResult";

export default class SearchResults extends Component {
  render() {
    return (
      <main>
        <section className="search-results">
          <p className="totals">About 15500000 search results (0.76 seconds)</p>
          <ul>
            <SearchResult data={this.props.data.searchResults[0]} />

            <QuestionAnswersContainer />

            <SearchResult data={this.props.data.searchResults[1]} />
          </ul>
        </section>

        <SearchHighlights data={this.props.data.knowledgePanel} />
      </main>
    );
  }
}
