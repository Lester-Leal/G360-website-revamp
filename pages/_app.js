import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/layout";
import "../styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    var $circle = $(".mouse");
    function moveCircle(e) {
      TweenLite.to($circle, 0.1, {
        css: {
          left: e.pageX - 50,
          top: e.pageY - 50,
        },
      });
    }

    $(window).on("mousemove", moveCircle);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Guerilla360 Integrated Solutions Co.</title>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
      crossOrigin="anonymous" 
      />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script src="/script/ScrollUp.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.4/TweenMax.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/warpjs@1.0.8/dist/warp.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      ></Script>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.8.1/ocanvas.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js"
        strategy="beforeInteractive"
      ></Script>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
        strategy="beforeInteractive"
      ></Script>

      <Layout>
        <div className="mouse">
          <p>DRAG</p>
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp; 