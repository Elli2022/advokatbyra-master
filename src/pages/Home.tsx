import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";
import Footer from "../components/Footer";
import Video from "../components/Video";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LargeBanner />
      <Video />
      <Footer />
    </>
  );
}

export default Home;
