import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const products = {
  volailles: [
    { name: "Saucisse Minu", image: "/placeholder.svg" },
    { name: "Pointe Amadorie", image: "/placeholder.svg" },
    { name: "Aileron", image: "/placeholder.svg" },
    { name: "Poulet Entier", image: "/placeholder.svg" },
  ],
  poissons: [
    { name: "Tilapia", image: "/placeholder.svg" },
    { name: "Sardine", image: "/placeholder.svg" },
    { name: "Faux Bar", image: "/placeholder.svg" },
    { name: "Yellow Crocker", image: "/placeholder.svg" },
    { name: "Maquereau", image: "/placeholder.svg" },
  ],
  "fruits-legumes": [
    { name: "Pomme Fruit", image: "/placeholder.svg" },
    { name: "Poire", image: "/placeholder.svg" },
    { name: "Pêche", image: "/placeholder.svg" },
    { name: "Prune", image: "/placeholder.svg" },
    { name: "Raisin", image: "/placeholder.svg" },
    { name: "Pomme de Terre", image: "/placeholder.svg" },
  ],
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "volailles";

  const categoryTitles = {
    volailles: "Volailles",
    poissons: "Poissons",
    "fruits-legumes": "Fruits et Légumes",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            {categoryTitles[category as keyof typeof categoryTitles]}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products[category as keyof typeof products].map((product) => (
              <ProductCard
                key={product.name}
                {...product}
                category={categoryTitles[category as keyof typeof categoryTitles]}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;