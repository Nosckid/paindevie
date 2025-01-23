import { CategoryCard } from "@/components/CategoryCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";

const productGroups = [
  {
    title: "Volailles",
    image: "/placeholder.svg",
    description: "Découvrez notre sélection de volailles de qualité",
    link: "/products?category=volailles",
  },
  {
    title: "Poissons",
    image: "/placeholder.svg",
    description: "Une variété de poissons frais pour tous les goûts",
    link: "/products?category=poissons",
  },
  {
    title: "Fruits et Légumes",
    image: "/placeholder.svg",
    description: "Des fruits et légumes frais et de saison",
    link: "/products?category=fruits-legumes",
  },
];

const products = {
  volailles: [
    { name: "Saucisse Minu", image: "/placeholder.svg", category: "Volailles" },
    { name: "Pointe Amadorie", image: "/placeholder.svg", category: "Volailles" },
    { name: "Pointe SNV", image: "/placeholder.svg", category: "Volailles" },
    { name: "Pointe Clevia", image: "/placeholder.svg", category: "Volailles" },
    { name: "Aileron", image: "/placeholder.svg", category: "Volailles" },
    { name: "Poulet Entier", image: "/placeholder.svg", category: "Volailles" },
    { name: "Cuisses de Poulet", image: "/placeholder.svg", category: "Volailles" },
  ],
  poissons: [
    { name: "Tilapia", image: "/placeholder.svg", category: "Poissons" },
    { name: "Sardine", image: "/placeholder.svg", category: "Poissons" },
    { name: "Faux Bar", image: "/placeholder.svg", category: "Poissons" },
    { name: "Yellow Crocker", image: "/placeholder.svg", category: "Poissons" },
    { name: "Maquereau", image: "/placeholder.svg", category: "Poissons" },
  ],
  "fruits-legumes": [
    { name: "Pomme Fruit", image: "/placeholder.svg", category: "Fruits et Légumes" },
    { name: "Poire", image: "/placeholder.svg", category: "Fruits et Légumes" },
    { name: "Pêche", image: "/placeholder.svg", category: "Fruits et Légumes" },
    { name: "Prune", image: "/placeholder.svg", category: "Fruits et Légumes" },
    { name: "Raisin", image: "/placeholder.svg", category: "Fruits et Légumes" },
    { name: "Pomme de Terre", image: "/placeholder.svg", category: "Fruits et Légumes" },
  ],
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto">
          {!category ? (
            <>
              <h1 className="font-playfair text-4xl font-bold text-center mb-12">
                Nos Produits
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {productGroups.map((group) => (
                  <CategoryCard key={group.title} {...group} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="font-playfair text-4xl font-bold text-center mb-12">
                {category === "volailles" && "Volailles"}
                {category === "poissons" && "Poissons"}
                {category === "fruits-legumes" && "Fruits et Légumes"}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products[category as keyof typeof products]?.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;