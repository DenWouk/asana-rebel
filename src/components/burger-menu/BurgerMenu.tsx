"use client";

import "./BurgerMenu.css";
import { useState } from "react";
import Link from "next/link";

export default function BurgerMenu() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="burger-menu">
      <input
        className="burger-checkbox"
        type="checkbox"
        checked={active ? true : false}
        onClick={toggle}
      />
      <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>

      <div className="menu-items">
        <li>
          <Link className="navbar-link" href={"/"} onClick={toggle}>
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" href={"magazine"} onClick={toggle}>
            Magazine
          </Link>
        </li>
        <li>
          <Link className="navbar-link" href={"help"} onClick={toggle}>
            Help
          </Link>
        </li>
        <li>
          <Link className="navbar-link" href={"sign-up"} onClick={toggle}>
            Sign up
          </Link>
        </li>
      </div>
    </div>
  );
}
