import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import $ from "jquery";
import React, { useState, useEffect } from "react";

import Head from "next/head";
const Navbar = dynamic(() => import("../modules/navbar"));
const Footer = dynamic(() => import("../modules/footer"));

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

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
