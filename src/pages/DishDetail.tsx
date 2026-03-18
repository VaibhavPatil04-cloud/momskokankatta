import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DishHero from "@/components/dish/DishHero";
import DishInfo from "@/components/dish/DishInfo";
import DishHighlights from "@/components/dish/DishHighlights";
import RelatedDishes from "@/components/dish/RelatedDishes";
import DishCTA from "@/components/dish/DishCTA";
import { menuData } from "@/data/menuData";

const DishDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the dish from menuData
  // Flattening all categories to find the dish by ID
  const allDishes = Object.values(menuData).flat() as any[];
  const dish = allDishes.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!dish) {
    return <Navigate to="/menu" replace />;
  }

  const tagline = dish.desc 
    ? (dish.desc.split(".")[0] || "A culinary masterpiece") 
    : "Elite dining experience";

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <DishHero 
          name={dish.name} 
          tagline={tagline} 
          image={dish.image || "/src/assets/dish1.jpg"} 
        />
        <DishInfo 
          name={dish.name}
          description={dish.desc || ""}
          price={dish.price}
          ingredients={dish.ingredients || ["Fresh Ingredients", "Elite Spices"]}
          tasteProfile={dish.tasteProfile || "Rich & Authentic"}
          servingSize={dish.servingSize || "Serves 1-2"}
          tags={dish.tags || ["Chef's Special"]}
          image={dish.image || "/src/assets/dish1.jpg"}
        />
        <DishHighlights />
        <RelatedDishes currentId={id} />
        <DishCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DishDetail;
