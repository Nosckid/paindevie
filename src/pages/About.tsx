import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            About Pain de Vie
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-center text-gray-600">
              Content coming soon...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;