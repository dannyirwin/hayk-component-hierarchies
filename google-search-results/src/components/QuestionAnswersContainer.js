import React, { Component } from "react";

export default class QuestionAnswersContainer extends Component {
  render() {
    return (
      <li>
        <div className="question-answers">
          <h3>People also ask</h3>
          <div className="question-answer">
            <header>
              <h3>How much does Flatiron School cost?</h3>
              <i className="fa fa-angle-up"></i>
            </header>
          </div>
          <div className="question-answer">
            <header>
              <h3>Are coding bootcamps worth it?</h3>
              <i className="fa fa-angle-up"></i>
            </header>
          </div>
          <div className="question-answer">
            <header>
              <h3>How long is app Academy?</h3>
              <i className="fa fa-angle-up"></i>
            </header>
          </div>
        </div>
      </li>
    );
  }
}
