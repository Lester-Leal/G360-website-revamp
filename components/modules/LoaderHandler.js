import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoaderStore } from "../../store/store";

export default function LoaderHandler() {
  const getLoader = useLoaderStore((state) => state.reset);
  const router = useRouter();

  useEffect(
    (e) => {
      var $loader = document.querySelector(".loader");
      window.setTimeout(function () {
        $loader.classList.remove("loader--active", "removeAnimation");
      }, 2000);
    },
    [router.pathname]
  );

  useEffect(
    (e) => {
      var $loader = document.querySelector(".loader");
      $loader.classList.add("loader--active", "removeAnimation");
    },
    [router.pathname]
  );

  return (
    <div className="loader loader--active">
      {/* BLUE */}
      <div className="loader__tile" />
      <div className="loader__tile" />
      <div className="loader__tile" />
      <div className="loader__tile" />
      {/* ORANGE */}
      <div className="loader__tile" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
      <div className="loader__tileP" />
    </div>
  );
}