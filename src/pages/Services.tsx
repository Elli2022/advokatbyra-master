import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Services() {
  console.log("tjänster");
  return (
    <>
      <Navbar />
      <Banner />
      <div style={{ color: "white" }}>Tjänster</div>
      <Footer />
    </>
  );
}

export default Services;
