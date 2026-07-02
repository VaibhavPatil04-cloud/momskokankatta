import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuNav from "@/components/menu/MenuNav";
import MenuCategory from "@/components/menu/MenuCategory";
import MenuCTA from "@/components/menu/MenuCTA";
import { menuData } from "@/data/menuData";

const Menu = () => {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));
    if (element) {
      const offset = 140; // Navbar + MenuNav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Find the entry that takes up the most space on screen
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const activeId = visibleEntries[0].target.id;
        
        const currentCategory = categories.find(
          cat => cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === activeId
        );
        
        if (currentCategory) {
          setActiveCategory(currentCategory);
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-200px 0px -40% 0px", // Adjust margins to trigger nicely when scrolling below sticky header
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // Multiple thresholds for accurate ratio
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    categories.forEach(category => {
      const id = category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <MenuHero />
        <MenuNav 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryClick={handleCategoryClick} 
        />
        
        <div className="container mx-auto px-6 max-w-7xl">
          {categories.map((category) => (
            <MenuCategory
              key={category}
              id={category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              title={category}
              items={menuData[category as keyof typeof menuData]}
            />
          ))}
        </div>
        
        <MenuCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
