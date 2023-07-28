import "../styles/globals.css";
import "../styles/homePage.css";
import Link from "next/link";

import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="navbar flex justify-between align-middle p-2">
        <div className="navbarLeft">
          <h1 className="m-0">Navbar</h1>
        </div>
        <div className="navbarRight">
          <Link className="p-1" href="/dashboard">
            Dashboard
          </Link>
          <Link className="p-1" href="/dashboard/about">
            About
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
      <div className="ms-5 me-5">
        <footer className="flex flex-wrap justify-between align-middle py-3 px-3 my-4 border-t">
          <div className="col-md-4 flex justify-start align-middle">
            <p className="m-0">Copyright © 2023 by Marc Juan</p>
          </div>
          <div className="socialLinks flex justify-evenly">
            <MdEmail />
            <BsLinkedin />
            <BsFacebook />
            <BsGithub />
          </div>
        </footer>
      </div>
    </>
  );
}
