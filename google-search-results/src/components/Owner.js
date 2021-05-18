import React, { Component } from "react";

export default function Owner({ owner }) {
  return (
    <li>
      <dt>Owner:</dt>
      <dd>
        <a href={owner.url}>{owner.label}</a>
      </dd>
    </li>
  );
}
