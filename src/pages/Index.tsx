import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const images = [
    "/placeholder-image1.jpg", // Replace with actual image paths
    "/placeholder-image2.jpg",
    "/placeholder-image3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);

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
            {/* Category Card 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/category1.jpg" // Replace with actual category image
                alt="Volailles"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Volailles</h3>
                <p className="text-sm text-gray-600">
                  Découvrez nos volailles de qualité, élevées avec soin.
                </p>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/category2.jpg" // Replace with actual category image
                alt="Poissons"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Poissons</h3>
                <p className="text-sm text-gray-600">
                  Des poissons frais directement issus de nos pêcheries.
                </p>
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/category3.jpg" // Replace with actual category image
                alt="Fruits"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Fruits</h3>
                <p className="text-sm text-gray-600">
                  Savourez nos fruits frais et riches en saveurs.
                </p>
              </div>
            </div>

            {/* Category Card 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/category4.jpg" // Replace with actual category image
                alt="Légumes"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Légumes</h3>
                <p className="text-sm text-gray-600">
                  Des légumes frais pour des repas sains et équilibrés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
