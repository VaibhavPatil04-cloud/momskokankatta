import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuPreview from "@/components/MenuPreview";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";
import GudhiPadwaCelebration from "@/components/GudhiPadwaCelebration";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturedDishes />
    <AboutSection />
    <MenuPreview />
    <GallerySection />
    <ExperienceSection />
    <CTASection />
    <ContactPreview />
    <Footer />
    <GudhiPadwaCelebration />
  </div>
);


export default Index;
