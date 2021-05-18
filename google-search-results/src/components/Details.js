import React, { Component } from "react";
import Employee from "./Employees";
import Founders from "./Founders";
import Headquarters from "./Headquarters";
import Owner from "./Owner";
import Founded from "./Founded";

export default class Details extends Component {
  render() {
    return (
      <section className="details">
        <p className="description">{this.props.description}</p>
        <ul>
          <Founders founders={this.props.data.founders} />
          <Employee employeeCount={this.props.data.employees} />
          <Owner owner={this.props.data.owner} />
          <Headquarters headquarters={this.props.data.headquarters} />
          <Founded yearFounded={this.props.data.yearFounded} />
        </ul>
      </section>
    );
  }
}
