import { CategoryCard } from "@/components/CategoryCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  {
    title: "Volailles",
    image: "src/picture/volaille.jpg",
    description: "Premium quality poultry products",
    link: "/products?category=volailles",
  },
  {
    title: "Poissons",
    image: "src/picture/poisson.jpg",
    description: "Fresh fish and seafood",
    link: "/products?category=poissons",
  },
  {
    title: "Fruits et Légumes",
    image: "src/picture/fruit.jpg",
    description: "Fresh fruits and vegetables",
    link: "/products?category=fruits-legumes",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
            Pain de Vie
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Your premier destination for quality poultry, fish, fruits, and vegetables
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">
            Our Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;