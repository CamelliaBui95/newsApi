import React from "react";
import Link from "next/link";

const NavBar = ({ items }) => {

    return (
      <nav className="navbar fixed-top navbar-light bg-primary">
        <a className="navbar-brand" href="/">
          <i className="bi bi-newspaper" style={{ marginRight: "10px" }}></i>
          <span>NewsAPI</span>
        </a>
        <ul className="navbar-nav">
          {items.map((item) => {
            return (
              <li className="nav-item" key={item.key}>
                {item.path ? <Link className="nav-link" href={{ pathname: item.path }} style={{color: "whitesmoke", fontSize: "20px"}}>
                  {item.content}
                </Link> : item.content}
              </li>
            );
          })}
        </ul>
      </nav>
    );
};

export default NavBar;
