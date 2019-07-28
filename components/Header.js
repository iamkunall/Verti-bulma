import Link from "next/link";
import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  mobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }
  render() {
    const { isActive } = this.state;
    return (
      <div>
        <nav
          className="navbar is-spaced"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 id="logo-heading">verti</h1>
              <p id="logo-para">
                By <span id="uppercase">html 5 up</span>{" "}
              </p>
            </a>
            <a
              role="button"
              className={
                isActive
                  ? "navbar-burger burger is-active"
                  : "navbar-burger burger"
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => this.mobileMenu()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className="navbar-end ">
            <div
              id="navbarBasicExample"
              className={isActive ? "navbar-menu is-active" : "navbar-menu"}
            >
              <div className="navbar-start">
                <Link href="./">
                  <a className="navbar-item hover">Welcome</a>
                </Link>

                <div className="navbar-item has-dropdown is-hoverable ">
                  <a className="navbar-link">Dropdown</a>

                  <div className="navbar-dropdown">
                    <a
                      className="navbar-item"
                      href="https://www.youtube.com/watch?v=NbyHNASFi6U"
                    >
                      About
                    </a>
                    <hr className="navbar-divider" />
                    <a
                      className="navbar-item"
                      href="https://www.youtube.com/watch?v=D--rQj49heE"
                    >
                      Jobs
                    </a>
                    <hr className="navbar-divider" />
                    <a
                      className="navbar-item"
                      href="https://www.youtube.com/watch?v=M81wneSjQbA"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <Link href="https://www.youtube.com/watch?v=aUZ9CuqlWGg">
                  <a className="navbar-item">Left-sidebar</a>
                </Link>
                <a className="navbar-item">Right-sidebar</a>
                <a className="navbar-item">No-sidebar</a>
              </div>
            </div>
          </div>
        </nav>
        <style jsx global>{`
          #logo-heading {
            background: #ff4486;
            color: #fff;
            border-radius: 8px;
            font-family: "Oleo Script", serif;
            font-weight: 400;
            padding: 0rem 1rem 0rem 1rem;
            font-size: 3rem;
            letter-spacing: 0.05em;
          }
          #logo-para {
            margin-left: 0.5rem;
            font-family: serif;
            font-size: 1rem;
            font-weight: 100;
          }

          #uppercase {
            text-transform: uppercase;
          }

          .navbar-start a {
            font-weight: bold;
            font-color: black;
            margin-right: 1rem;
            font-size: 17.5px;
            border-radius: 10px;
            padding: 0.25rem 1rem 0.25rem 1rem;
            transition: background-color 0.5s;
          }

          .navbar-start a:hover {
            background-color: white;
            border-radius: 6px;
            border-radius: 10px;
          }
          .navbar-dropdown a {
            margin: 0;
          }

          .navbar {
            background-color: #e7e7e7;
          }
          .navbar-dropdown {
            margin-top: 0.5rem;
          }
        `}</style>
      </div>
    );
  }
}
