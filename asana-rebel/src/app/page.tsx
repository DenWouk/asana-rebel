import "./home.css";
import Image from "next/image";
import PhoneImg from "../../public/phone-img.png";
import AppStoreLogo from "../../public/app-store-logo.svg";
import GooglePlayLogo from "../../public/google-play-logo.svg";

export default function Home() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-content">
          <h1 className="main-title">
            Design Your
            <br />
            Perfect Day.
          </h1>

          <p className="main-description">
            Get the best of health and fitness, all in one place. Download the
            app today!
          </p>

          <div className="main-store-links">
            <Image
              src={AppStoreLogo}
              alt="Apple Store Logo"
              className="store-logo"
            />
            <Image
              src={GooglePlayLogo}
              alt="Google Play Logo"
              className="store-logo"
            />
          </div>
        </div>

        <div className="main-img">
          <Image src={PhoneImg} alt="Mobile Phone Img" className="phone-img" />
        </div>
      </div>
    </main>
  );
}
