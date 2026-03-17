import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuPreview from "@/components/MenuPreview";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeatureGrid />
    <AboutSection />
    <FeaturedDishes />
    <MenuPreview />
    <GallerySection />
    <ExperienceSection />
    <CTASection />
    <ContactPreview />
    <Footer />
  </div>
);

export default Index;
