import { CategoryCard } from "@/components/CategoryCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";

const productGroups = [
  {
    title: "Volailles",
    image: "src/picture/volaille.jpg",
    description: "Découvrez notre sélection de volailles de qualité",
    link: "/products?category=volailles",
  },
  {
    title: "Poissons",
    image: "src/picture/poisson.jpg",
    description: "Une variété de poissons frais pour tous les goûts",
    link: "/products?category=poissons",
  },
  {
    title: "Fruits et Légumes",
    image: "src/picture/fruit.jpg",
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
    { name: "Aileron", image: "src/picture/aileron.jpg", category: "Volailles" },
    { name: "Poulet Entier", image: "src/picture/entier.jpg", category: "Volailles" },
    { name: "Cuisses de Poulet", image: "src/picture/cuisse_poulet.jpg", category: "Volailles" },
  ],
  poissons: [
    { name: "Tilapia", image: "src/picture/tilapia.jpg", category: "Poissons" },
    { name: "Sardine", image: "src/picture/sardine.jpg", category: "Poissons" },
    { name: "Faux Bar", image: "src/picture/faux bar.jpg", category: "Poissons" },
    { name: "Yellow Croacker", image: "src/picture/yellow croaker.jpg", category: "Poissons" },
    { name: "Maquereau", image: "src/picture/maquereau.jpg", category: "Poissons" },
  ],
  "fruits-legumes": [
    { name: "Pomme Fruit", image: "/src/picture/apple.jpg", category: "Fruits et Légumes" },
    { name: "Poire", image: "src/picture/poire.jpg", category: "Fruits et Légumes" },
    { name: "Pêche", image: "src/picture/peche.jpg", category: "Fruits et Légumes" },
    { name: "Prune", image: "src/picture/prune.jpg", category: "Fruits et Légumes" },
    { name: "Raisin", image: "/src/picture/raisin.jpg", category: "Fruits et Légumes" },
    { name: "Pomme de Terre", image: "src/picture/pommedeterre.jpg", category: "Fruits et Légumes" },
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