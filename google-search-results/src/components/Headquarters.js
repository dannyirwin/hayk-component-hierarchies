import React from "react";

export default function Headquarters({ headquarters }) {
  return (
    <li>
      <dt>Headquarters location:</dt>
      <dd>
        <a href={headquarters.url}>{headquarters.label}</a>
      </dd>
    </li>
  );
}
