"use client";

import "./BurgerMenu.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BurgerIcon from "../../../public/burger-icon.svg";

export default function BurgerMenu() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const toggle = () => {
    setActive((prevState) => !prevState);
  };

  const selected = (href: string) => pathname === href;

  return (
    <div className="burger-menu">
      <input
        className="burger-checkbox"
        type="checkbox"
        checked={active ? true : false}
        onClick={toggle}
      />
      <Image src={BurgerIcon} alt="Menu Icon" className="burger-icon" />

      <ul className="menu-items">
        <li>
          <Link
            href={"/"}
            className={selected("/") ? "navbar-link selected" : "navbar-link"}
            onClick={toggle}
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
            onClick={toggle}
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
            onClick={toggle}
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
            onClick={toggle}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
}
