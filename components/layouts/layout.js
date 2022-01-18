import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
const Navbar = dynamic(() => import("../modules/navbar"));
const Footer = dynamic(() => import("../modules/footer"));

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    var loadScript = function (src) {
      var tag = document.createElement("script");
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(tag);
    };

    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"
    );
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Vollkorn:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script src="/script/3dGlobe.js" />
      <div
        style={{
          height: "100%",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        {<Navbar />}
        {children}
        {<Footer />}
      </div>
    </>
  );
};

export default Layout;
