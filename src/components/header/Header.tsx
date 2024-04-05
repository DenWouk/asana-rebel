import "./Header.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href={"/"}>
            <Image
              src="/header-logo.svg"
              alt="Asana Rebel Logo"
              className="header-logo-svg"
              width={180}
              height={40}
              priority
            />
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
}
