import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryBreak from "@/components/gallery/GalleryBreak";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
        
        <GalleryBreak 
          image={about1} 
          title="The Warmth of Tradition" 
        />
        
        <GalleryBreak 
          image={about2} 
          title="Crafted Moments" 
        />
        
        <GalleryCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
