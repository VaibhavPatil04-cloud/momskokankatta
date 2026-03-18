import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryBreak from "@/components/gallery/GalleryBreak";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import ourstory4 from "@/assets/ourstory4.png";
import ourstory3 from "@/assets/ourstory3.png";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
        
        <GalleryBreak 
          image={ourstory4} 
          title="The Warmth of Tradition" 
        />
        
        <GalleryBreak 
          image={ourstory3} 
          title="Crafted Moments" 
        />
        
        <GalleryCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
