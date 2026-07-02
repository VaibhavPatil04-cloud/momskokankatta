import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuPreview from "@/components/MenuPreview";
import GallerySection from "@/components/GallerySection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturedDishes />
    <AboutSection />
    <MenuPreview />
    <GallerySection />
    <TestimonialsSection />
    <ExperienceSection />
    <CTASection />
    <ContactPreview />
    <Footer />
  </div>
);


export default Index;
