import React from "react";
import "../styles/globals.css";
import "../styles/homePage.css";
import "../styles/index.css";
import "../styles/projectSwiper.css";
import "../styles/slick.css";
import "../styles/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </>
  );
}
