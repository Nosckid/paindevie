import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
}

export const ProductCard = ({ name, image, category }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-w-1 aspect-h-1 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="font-playfair text-lg font-semibold text-gray-900">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};