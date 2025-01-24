import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Pain de Vie</h3>
            <p className="text-sm">
              Your premier destination for quality poultry, fish, fruits, and vegetables.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+229 456 7890</span>
              </a>
              <a href="mailto:contact@paindevie.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>contact@paindevie.com</span>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary transition-colors"
              >
                <MapPin size={16} />
                <span>Lot 0186, Irede Akpakpa 05 BP 1096 Cotonou Benin</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Monday - Friday: 8:00 - 18:00 </p>
              <p>Saturday: 8:00 - 17:30 </p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pain de Vie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
