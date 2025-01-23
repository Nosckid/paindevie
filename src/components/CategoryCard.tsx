import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export const CategoryCard = ({ title, image, description, link }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 p-6">
          <h3 className="font-playfair text-2xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};