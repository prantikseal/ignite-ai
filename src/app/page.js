import Image from "next/image";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import OpenAI from "openai";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <>
      <HeroSection />
      
      <div className="left-div"></div>
      <div className="right-div"></div>
      <Footer />
      {/* <InputSection /> */}
    </>
  );
}
