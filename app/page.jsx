import Activity from "@/components/Activity";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import Location from "@/components/Location";
import React from "react";

const Home = () => {
  return (
    <div className="font-hanken">
      <Header />
      <Hero />
      <Feature />
      <Activity />
      {/* Image Hidden because image not compatible */}
      <Images />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
