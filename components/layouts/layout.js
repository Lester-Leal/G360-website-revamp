import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import ScrollTop from "./ScrollTop";

import Head from "next/head";
const Navbar = dynamic(() => import("../modules/NavbarHandler"));
const Footer = dynamic(() => import("../modules/FooterHandler"));
const Loader = dynamic(() => import("../modules/LoaderHandler"));

const Layout = ({ children }) => {

  const router = useRouter();
  const [show, setShow] = useState(false);


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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
      </Head>

      <div
        className=" "
        style={{
          height: "100%",
          backgroundColor: "transparent",
          position: "relative",
        }}
      >
        {
          <Navbar
            show={() => {
              setShow(true);
            }}
            unShow={() => {
              setShow(false);
            }}
          />
        }
        {<Loader />}
        <div className={show ? "d-none" : "h-100"}>
          {children}
          <div className={router.pathname === "/project" ? "d-none" : ""}>
            {/* {<Footer />} */}
            {<ScrollTop />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;