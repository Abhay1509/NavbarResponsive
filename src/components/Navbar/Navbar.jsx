import React, { Component } from "react";
import { MenuItems } from "./menuItems";
import "./Navbar.css";
import { Button } from "../Button";

class Navbar extends Component {
  state = { clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}
export default Navbar;
