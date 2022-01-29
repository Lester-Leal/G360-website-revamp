import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/layout";
import "../styles/globals.scss";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const mouse = document.querySelector(".mouse");

    document.addEventListener("mousemove", (event) => {
      let left = event.pageX;
      let top = event.pageY;
      mouse.style.top = `${top - 20}px`;
      mouse.style.left = `${left - 20}px`;
    });
  }, []);
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/script/3dGlobe.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.8.1/ocanvas.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></Script>
      <Layout>
        <div className="mouse"> </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
