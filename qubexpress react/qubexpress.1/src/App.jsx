import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SlidingTextBanner from "./components/SlidingTextBanner/SlidingTextBanner.jsx"
import Hero from "./components/Hero/Hero.jsx";
import Section1 from "./components/Section1/Section1.jsx"
import Section2 from "./components/Section2/Section2.jsx"
import Section3 from "./components/Section3/Section3.jsx"
import Card from "./components/Card/Card.jsx";
import Section4 from "./components/Section4/Section4.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <SlidingTextBanner/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Card/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;
