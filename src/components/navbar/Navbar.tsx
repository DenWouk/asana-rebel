import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../burger-menu/BurgerMenu";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link className="navbar-link" href={"magazine"}>
          Magazine
        </Link>
        <Link className="navbar-link" href={"help"}>
          Help
        </Link>
        <Link className="navbar-link" href={"sign-up"}>
          Sign up
        </Link>
      </div>

      <div className="burger-icon">
        <BurgerMenu />
      </div>
    </nav>
  );
}
