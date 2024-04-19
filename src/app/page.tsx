import "./home.css";
import Image from "next/image";
import PhoneImg from "../../public/phone-img.png";
import { PhoneImgPreload } from "../../public/imgs-base64";
import AppStoreLogo from "../../public/app-store-logo.svg";
import GooglePlayLogo from "../../public/google-play-logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
            <Link
              href="https://apps.apple.com/app/asana-rebel-get-in-shape/id1067860796"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={AppStoreLogo}
                alt="Apple Store Logo"
                priority={true}
                className="store-logo"
              />
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.asanayoga.asanarebel&hl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GooglePlayLogo}
                alt="Google Play Logo"
                priority={true}
                className="store-logo"
              />
            </Link>
          </div>
        </div>

        <div className="main-img">
          <Image
            src={PhoneImg}
            alt="Mobile Phone Img"
            quality={100}
            placeholder="blur"
            blurDataURL={PhoneImgPreload}
            className="phone-img"
          />
        </div>
      </div>
    </main>
  );
}
