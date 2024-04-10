"use client";

import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenu from "../burger-menu/BurgerMenu";

export default function Navbar() {
  const pathname = usePathname();

  const selected = (href: string) => pathname === href;

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link
            href={"/"}
            className={selected("/") ? "navbar-link selected" : "navbar-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"magazine"}
            className={
              selected("/magazine") ? "navbar-link selected" : "navbar-link"
            }
          >
            Magazine
          </Link>
        </li>
        <li>
          <Link
            href={"help"}
            className={
              selected("/help") ? "navbar-link selected" : "navbar-link"
            }
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            href={"sign-up"}
            className={
              selected("/sign-up") ? "navbar-link selected" : "navbar-link"
            }
          >
            Sign up
          </Link>
        </li>
      </ul>

      <div className="burger-menu-container">
        <BurgerMenu />
      </div>
    </nav>
  );
}
