import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutExperience from "@/components/about/AboutExperience";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutExperience />
      <AboutHighlights />
      <AboutCTA />
      <Footer />
    </main>
  );
};

export default About;
