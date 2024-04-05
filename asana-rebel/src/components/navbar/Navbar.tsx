import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
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

      <div className="menu-icon">
      <Image
              src="/menu-icon.svg"
              alt="Menu Icon"
              className="header-logo-svg"
              width={40}
              height={30}
            />
      </div>
    </>
  );
}
