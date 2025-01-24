// Required imports
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // For navigation
import productsData from "@/data/products.json"; // Import JSON data

const Home = () => {
  const images = [
    "src/picture/background/immeuble.jpeg",
    "src/picture/background/devant.jpeg",
    "src/picture/background/devante.jpeg",
    "src/picture/background/dechargement.jpeg",
    "src/picture/background/decharge.jpeg",
    "src/picture/background/another.jpeg",
    "src/picture/background/anotherone.jpeg",
    "src/picture/background/anothertwo.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen text-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('${images[currentIndex]}')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Pain de Vie
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Votre destination pour des produits de qualité : volailles, poissons,
            fruits et légumes frais.
          </p>
        </div>

        {/* Manual Navigation */}
        <div className="absolute inset-y-0 left-4 flex items-center z-20">
          <button
            onClick={goToPrev}
            className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-20">
          <button
            onClick={goToNext}
            className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Nos Catégories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-semibold text-center mb-8">
            Nos Catégories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.productGroups.map((group, index) => (
              <Link key={index} to={group.link}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
                    <p className="text-sm text-gray-600">{group.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
