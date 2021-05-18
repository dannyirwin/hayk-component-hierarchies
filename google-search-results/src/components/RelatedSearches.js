import React from "react";
import OtherResult from "./OtherResult";

export default function RelatedSearches({ results }) {
  console.log(results);
  return (
    <section className="related-searches">
      <h3>People also search for</h3>
      <ul>
        {results.map(result => {
          return <OtherResult result={result} />;
        })}
      </ul>
    </section>
  );
}
