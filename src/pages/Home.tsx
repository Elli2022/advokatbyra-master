import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import LargeBanner from "../components/LargeBanner";
import Footer from "../components/Footer";
import Video from "../components/Video";
import { NewsSection } from "../components/NewsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <LargeBanner />
      <Video />
      <NewsSection />
      <Footer />
    </>
  );
}

export default Home;
