import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WorkPreview from "@/components/home/WorkPreview";
import Pricing from "@/components/home/Pricing";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <TechStack />
      <WorkPreview />
      {/* <Pricing /> */}
      <FinalCTA />
    </>
  );
}
