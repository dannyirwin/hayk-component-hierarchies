import React from "react";

export default function OtherResult({ result }) {
  return (
    <li>
      <div className="external-link">
        <a href={result.linkUrl}>
          <figure>
            <img src={result.thumbnailUrl} alt={result.label} />
          </figure>
          <p>{result.label} </p>
        </a>
      </div>
    </li>
  );
}
