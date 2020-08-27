import React from "react";
import NavbarSection from "./NavbarSection";
import Welcome from "./Welcome";
import Jake from "./Jake";
import About from "./About"

function HomePage() {
  return (
    <div>
      <NavbarSection />
      <Welcome />
      <Jake />
      <About />
    </div>
  );
}

export default HomePage;
