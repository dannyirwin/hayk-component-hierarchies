import React, { Component } from "react";

export default class PrimaryNavigation extends Component {
  render() {
    return (
      <header>
        <div className="primary-navigation">
          <span id="logo">
            <a href="https://google.com">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google logo"
              />
            </a>
          </span>
          <form className="search-input">
            <input type="text" name="searchText" />
            <i className="fa fa-search"></i>
          </form>
          <nav className="user-navigation">
            <ul>
              <li className="apps">
                <a href="#">
                  <i className="fa fa-th"></i>
                </a>
              </li>
              <li className="profile">
                <a href="#">
                  <img
                    src="https://lh3.googleusercontent.com/-W85Kft4LxYk/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfuaNPMpoEmUvu4WR_lx0wXeH32pg.CMID/s64-c/photo.jpg"
                    alt="Profile"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="secondary-navigation">
          <ul className="search-types">
            <li>
              <a className="search-type active" href="#">
                <i className="fa fa-search"></i>
                <span>All</span>
              </a>
            </li>
            <li>
              <a className="search-type " href="#">
                <i className="fa fa-newspaper"></i>
                <span>News</span>
              </a>
            </li>
            <li>
              <a className="search-type " href="#">
                <i className="fa fa-map-marked"></i>
                <span>Maps</span>
              </a>
            </li>
            <li>
              <a className="search-type " href="#">
                <i className="fa fa-video"></i>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a className="search-type " href="#">
                <i className="fa fa-images"></i>
                <span>Images</span>
              </a>
            </li>
            <li>
              <a className="search-type " href="#">
                <i className="fa fa-ellipsis-v"></i>
                <span>More</span>
              </a>
            </li>
          </ul>
          <ul className="configuration">
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
