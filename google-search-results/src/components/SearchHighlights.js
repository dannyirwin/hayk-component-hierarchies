import React, { Component } from "react";
import ImageBar from "./ImageBar";
import Overview from "./Overview";

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
          <section className="details">
            <p className="description">
              Flatiron School is an educational organization founded in 2012 by
              Adam Enbar and Avi Flombaum. The organization is based in New York
              City and teaches software engineering, computer programming, data
              science, UX/UI design, and cybersecurity analytics.
            </p>
            <ul>
              <li>
                <dt>Founder(s):</dt>
                <dd>
                  <a href="https://www.google.com/search?q=Adam+Enbar">
                    Adam Enbar,{" "}
                  </a>
                  <span>Avi Flombaum</span>
                </dd>
              </li>
              <li>
                <dt>Employees:</dt>
                <dd>151-200</dd>
              </li>
              <li>
                <dt>Owner:</dt>
                <dd>
                  <a href="https://www.google.com/search?q=WeWork">WeWork</a>
                </dd>
              </li>
              <li>
                <dt>Headquarters location:</dt>
                <dd>
                  <a href="https://www.google.com/search?q=New+York">
                    New York, NY
                  </a>
                </dd>
              </li>
              <li>
                <dt>Founded:</dt>
                <dd>2012</dd>
              </li>
            </ul>
          </section>
          <section className="profiles">
            <h3>Profiles</h3>
            <ul>
              <li>
                <div className="external-link">
                  <a href="https://twitter.com/flatironschool">
                    <figure>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABZUlEQVR4AWLQWfWQpmjUAjxo1IJRC2wBpJTDQkVRFIafKBujZrnGjbNd84wHiJNs27btrm3rrFbW1T73m20u/yMsW0cBg6zue5XCYLFQcC41JK0I3PsYaWvC+BkugYFljrbmWPp/H/86FOnhB2hGZbTg/dBhFoEBhsoEAO23Su9+5s/9nA0R/ANtXEgNJTtiAgObfB28gZaKt8Wen2ZarhRgjVL8nagGmetC+IFMb5lgqOtOZAtsLVgjcIhFZqD+RLYj0IFzGCwUcRctc7XgNNcyA7GBhAW+EWvnHK3XCjqDhg3OUpvAEegFTgAdA+nrwnuF4zCw7DSlwqOPscRxUAmtiYqY5NDXImz/6mPprlAP1sDgcjdFLokdCkPGW6Kstmbhtoim2IWNsRsvFXNsjURvBmvgiMROc11S0+BhVvmhFAUDhewrISgbg4/qlyUdeEnl+sBk7SOgfcBSb3jWaKMWjFoAABKespvtvzYlAAAAAElFTkSuQmCC"
                        alt="Twitter"
                      />
                    </figure>
                    <p>Twitter</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="https://www.linkedin.com/school/the-flatiron-school/">
                    <figure>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVR4AeyVA5AkQRREZ862bTMcZ9u2wzrbtm3bWNvmaW3b3rzKRa+NOWVEDoqvqv//LZPtUpoubC2cLIxKMveyku1UmkYAG2EoyFYESFEgQIos346dX7K7YiFyN8iFB17Sxx4NRxzVdcbYO6aotke5cgB42sFXDGDjF4FM+UbGY+5TK9FXKQBKOKTtjNz68CMAdQ+oVjyAXPicoRtyS8M5GA0PqRGwgm9gxxdMf2SBkNhEZCoxORXbVH9CXllBWHOvCla9sQNPbegRit3qDmhyWL1SYkCKA7kIxvoH1MBrr5KZllJ/IWnK3zskZ/SXEIDB1vm0trAO6K5ndNCYN5DRz9tgWxdhfnc8pQ2madXdSmDb7CeWWPfOHite22LoDWMegiDFj4GJ983hFBLD9IOPcEB0AjZ8+S6daIeaAwJFG/v8ouJh4ROB3uf1sFHpB34GRSMmMRlJKalISE5hLEHJIRCjbptAXlyAmY8tEZ2QjOzaK4qSbHs6AItTdhHwvpU3N0ZB+hYQhcGXDTi//AFSUtNPW5SY3lX3KJc7gKSwuESYeIXByDMM4XFJyC1bv0i0PKbJoCx/ALewWMwSwccApZe9skFwTAKyiXEjPYZyBziq48zUlVK09j4VvLL3Q3ZFxCdh/D0z7lG+AHFJKVj03DrHwhxHqOzimjMeWZQ/QKQ42ZQH5jkW5u896o7IJmYJa0T5A/BqJ+S6Wv7eqebwH+A/QOUBTMwHYFdpAaY9tACrVqyYECPMOr9d1UF6Gx7QcgLb2McxfCOOu2uaB2CLyk/EJ6WPo4PEmtOLqgOsZK2Pa4IDSUvPeWKFXud1pRre94Ie5jy1kvqnC+AWxzTYn2Odnud0MSdjDM0i1ObXOvDVBQjNEFciMJrhKHJwH5FmDgIPfNds4DuniO75P3r6HNY9BwATNI1Cu+uNpgAAAABJRU5ErkJggg=="
                        alt="LinkedIn"
                      />
                    </figure>
                    <p>LinkedIn</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="https://www.instagram.com/flatironschool/">
                    <figure>
                      <img
                        src="data:image/png;base64,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"
                        alt="Instagram"
                      />
                    </figure>
                    <p>Instagram</p>
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <section className="related-searches">
            <h3>People also search for</h3>
            <ul>
              <li>
                <div className="external-link">
                  <a href="#">
                    <figure>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAmCAMAAABQzS1fAAAAn1BMVEX///8AAADtHjvn5+fs7Oybm5vCwsJSU1PrAADtEDTsACrtGDfFxcXe3t7sACjY2NguLi6srK339/fsACPLy8u4uLiRkZF7e3tqamr5x8r1n6fsAi9ERET60dReXl7wVWT84eMcHB3zgoz72dvuM0j2p673tLrsABz4vsI3NzeGhobyeoXvS1z+9PUUFRX96+0kJSXycHz0jpfxY3HuQFJkLJtqAAADJ0lEQVRIie2VXXeaQBCG54UFRAVhWQQFidSokUa0Sf7/b+vMqtQkPb1p75o5Jzq7yLOz73yE6Mu+TGzxjZbbv6Zs4u3j+HFcbSe7u10/12R833enM4p8bV3jT5U88rVsfcCsdt+rauJMHKcKHxYDKgFANX/kPWgOV9z0IGtyAZ86zD6AnrPQudkk3l93DYoCeYA8dc/wPbjWrZHiTD7gMfs9aLXl17N9zAFlQqyWT3Z/ipQUBWC3R2BB7B5ADcfXH5pPoIfYmTysjwtnEp5OP5g0ntxAymVQV1ALFAJi94AcCTVJgU+g76GTHfn7KX4jWlYc3vMNxEoErIlu2x4CYtdqRmg86Peg44hjCOk0otP+B9FuLDqNNhdQJyAOqz90FsTuoS2hNYISM+99RM8TAa0ZNHqROhDFK4nQR24EJBqdZ7hp1BqkvOIEeojuOKe3K2jztOfEH/cCCtf8ZIa6xixA2ZhzyzK51q3B90qFVXhoyvkAciTzDMricbzgdWaLYCSPSqAc6sgb6oizFnAsSDxeNwNoMb6ARnGVSRwSoFNde+Vj5f7JrqDNcrUdSb+9hr9ASpqBXMG5riyV0kpWSmv7jD9kw/rXq21WtN7T9oFequFqhgWmCNINtVxCFPZxIGKJ5uxPCT2nZM45vBM7o82bvL2tbmKTlBELMsfZoKkRtX1XcL4ixnLGSrSsExECzu1d+jmoV1rvaBHf0k9F28/5JcqjFCYyXAS8CcyVTb0qYUEFn3RXkOuYVi+0fOTQbgVJSVM3nLpScW0mfGjf8lwBktSCOr6QgKZD6qRF5Hu3o28Z6ezWIoSOD9UHaQku7EA6Dhq4FqPcW0Akz61x04avp+Ni/HR83a9PQ9NGKLgb5Ej+uRKNWuNrlC3LwyATXK7GKqoLSMZIKGMk5iGSZcMYyeVo4+aUtHqqWaaz1UiGlIDc7gqyp13s94OtgzdHmsBDnaIM4LZ96kUsmW+sRlzuaD1P3YF+P2q5GRTK6WVsiEYSYS7KTi91ZLdhhquJbcYy/ON3wz+K7J8y8jszk0UU6YhLXEdKsXvdce9nAP2rf0df9l/aTzRePmE/HKu2AAAAAElFTkSuQmCC"
                        alt="General Assembly"
                      />
                    </figure>
                    <p>General Assembly</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="#">
                    <figure>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAmCAMAAABQzS1fAAAAn1BMVEX///8AAADtHjvn5+fs7Oybm5vCwsJSU1PrAADtEDTsACrtGDfFxcXe3t7sACjY2NguLi6srK339/fsACPLy8u4uLiRkZF7e3tqamr5x8r1n6fsAi9ERET60dReXl7wVWT84eMcHB3zgoz72dvuM0j2p673tLrsABz4vsI3NzeGhobyeoXvS1z+9PUUFRX96+0kJSXycHz0jpfxY3HuQFJkLJtqAAADJ0lEQVRIie2VXXeaQBCG54UFRAVhWQQFidSokUa0Sf7/b+vMqtQkPb1p75o5Jzq7yLOz73yE6Mu+TGzxjZbbv6Zs4u3j+HFcbSe7u10/12R833enM4p8bV3jT5U88rVsfcCsdt+rauJMHKcKHxYDKgFANX/kPWgOV9z0IGtyAZ86zD6AnrPQudkk3l93DYoCeYA8dc/wPbjWrZHiTD7gMfs9aLXl17N9zAFlQqyWT3Z/ipQUBWC3R2BB7B5ADcfXH5pPoIfYmTysjwtnEp5OP5g0ntxAymVQV1ALFAJi94AcCTVJgU+g76GTHfn7KX4jWlYc3vMNxEoErIlu2x4CYtdqRmg86Peg44hjCOk0otP+B9FuLDqNNhdQJyAOqz90FsTuoS2hNYISM+99RM8TAa0ZNHqROhDFK4nQR24EJBqdZ7hp1BqkvOIEeojuOKe3K2jztOfEH/cCCtf8ZIa6xixA2ZhzyzK51q3B90qFVXhoyvkAciTzDMricbzgdWaLYCSPSqAc6sgb6oizFnAsSDxeNwNoMb6ARnGVSRwSoFNde+Vj5f7JrqDNcrUdSb+9hr9ASpqBXMG5riyV0kpWSmv7jD9kw/rXq21WtN7T9oFequFqhgWmCNINtVxCFPZxIGKJ5uxPCT2nZM45vBM7o82bvL2tbmKTlBELMsfZoKkRtX1XcL4ixnLGSrSsExECzu1d+jmoV1rvaBHf0k9F28/5JcqjFCYyXAS8CcyVTb0qYUEFn3RXkOuYVi+0fOTQbgVJSVM3nLpScW0mfGjf8lwBktSCOr6QgKZD6qRF5Hu3o28Z6ezWIoSOD9UHaQku7EA6Dhq4FqPcW0Akz61x04avp+Ni/HR83a9PQ9NGKLgb5Ej+uRKNWuNrlC3LwyATXK7GKqoLSMZIKGMk5iGSZcMYyeVo4+aUtHqqWaaz1UiGlIDc7gqyp13s94OtgzdHmsBDnaIM4LZ96kUsmW+sRlzuaD1P3YF+P2q5GRTK6WVsiEYSYS7KTi91ZLdhhquJbcYy/ON3wz+K7J8y8jszk0UU6YhLXEdKsXvdce9nAP2rf0df9l/aTzRePmE/HKu2AAAAAElFTkSuQmCC"
                        alt="General Assembly"
                      />
                    </figure>
                    <p>General Assembly</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="#">
                    <figure>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Hack Reactor"
                      />
                    </figure>
                    <p>Hack Reactor</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="#">
                    <figure>
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Fullstack Academy"
                      />
                    </figure>
                    <p>Fullstack Academy</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="external-link">
                  <a href="#">
                    <figure>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAVCAMAAAAjKAPRAAAAZlBMVEUAAAD////Q0NDX19eJiYmPj4+5ubnU1NScnJzu7u62trajo6O8vLzHx8fx8fEnJyc3NzeVlZXd3d2tra08PDxFRUVKSkrj4+NbW1t3d3dubm4xMTFkZGRWVlaBgYEODg4YGBggICDS62lYAAAB8UlEQVQ4ja2Ui5KbMAxFJczT2OaVBcISCP//k72yCWG72WnaqWYwRrIP8pWA5jZ6bW1C3j6/3L7bViGIq+HX1vlVcatVSlQqnWmiro0U/HNJxiAYEV1aY4a+v+FpeYkJ2UwWw0i5QBNNaY3lmedEk+cUCNy3kNn1BeYaQu3qb8U+6g/J4gKOXQvhNMn5iP00MJsl9maYh2u/R4od50cVOOV1BGfrW3C6mSi35iAp5nifxszZ0199z0d9Sj4VdbGlOJdz2WN99gNnlEyadZGVXen1KQ0FDrUD2PBUB6d0zEqnYhqpufIAzcpmeGesrGpwBBVlUGRsSINTOeQSRVZNj9XDbyoX9G9W/CfOApBtcrHGol7LI2Cks7sxPCRWWVFxzeDMpDPqLlP6dgKddF7OOruQHxqOLmHqKlr9pDk+hWfZpe6PjvpSr4KXqk6Y8WngtFM1OYa4db0pcCYgPuqSuXyDI+mj4eXd4rgzL+EADarjM0lC5A0Ochkta++xYbNwmEPbM9/e5sx2/wGYM+eyc8b3OD3zWoowflPy4LggDGRa/8xBr/YOBdtQtTtBX6Yp28CIRTJsms8F+5lz9OW09+ht7/5NtPI2HMupfXIgv3r6nXOFCqHaoOip/AA09nppr9g3NE8M5amZ9+ls0pz+2n4BWH8XsNVWkm0AAAAASUVORK5CYII="
                        alt="Coding Dojo"
                      />
                    </figure>
                    <p>Coding Dojo</p>
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </section>
    );
  }
}
