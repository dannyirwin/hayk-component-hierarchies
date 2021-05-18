import React, { Component } from "react";

export default function Employee({ employeeCount }) {
  return (
    <li>
      <dt>Employees:</dt>
      <dd>{employeeCount}</dd>
    </li>
  );
}
