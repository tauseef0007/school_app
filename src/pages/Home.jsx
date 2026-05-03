import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import About from "../components/About";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import TopHeader from "../components/TopHeader";

export default function Home() {
  return (
    <>
    <TopHeader />
      <Navbar />
      <HeroSlider />
      <About />
      <Features />
      <Gallery />
    </>
  );
}