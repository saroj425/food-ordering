import React from "react";
import Welcome from "../pages/Welcome";
import { About, Blog, Event, Menu, Services } from "../pages";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Services />
      <Event />
      <Menu />
      <Blog />
    </>
  );
}
