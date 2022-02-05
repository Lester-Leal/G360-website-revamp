import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoaderStore } from "../../store/store";
export default function loader() {
  const getLoader = useLoaderStore((state) => state.reset);
  const router = useRouter();

  useEffect(
    (e) => {
      var $loader = document.querySelector(".loader");
      window.setTimeout(function () {
        $loader.classList.remove("loader--active");
      }, 2000);
    },
    [router.pathname]
  );

  useEffect(
    (e) => {
      var $loader = document.querySelector(".loader");
      $loader.classList.add("loader--active");
    },
    [router.pathname]
  );

  return (
    <div className="loader loader--active">
      {/* Blue */}
      <div className="loader__tile" />
      <div className="loader__tile" />
      <div className="loader__tile" />
      <div className="loader__tile" />
      {/* Pink */}
      <div className="loader__tile" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
    </div>
  );
}
