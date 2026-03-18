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
    const handleScroll = () => {
      const categoryIds = categories.map(cat => cat.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));
      let current = activeCategory;

      for (const id of categoryIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = categories[categoryIds.indexOf(id)];
          }
        }
      }
      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories, activeCategory]);

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
