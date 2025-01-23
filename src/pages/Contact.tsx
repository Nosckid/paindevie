import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  const handleWhatsApp = () => {
    if (!formData.phone || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please enter your phone number and message.",
        variant: "destructive",
      });
      return;
    }
    window.open(
      `https://wa.me/${formData.phone}?text=${encodeURIComponent(
        formData.message
      )}`,
      "_blank"
    );
  };

  const handleCall = () => {
    if (window.innerWidth < 768) {
      const confirmed = window.confirm("Choose call method:\nOK for Direct Call\nCancel for WhatsApp Call");
      if (confirmed) {
        window.location.href = "tel:+1234567890";
      } else {
        window.location.href = "https://wa.me/1234567890";
      }
    } else {
      toast({
        title: "Contact Number",
        description: "+123 456 7890",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+123 456 7890"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1"
                  onClick={handleSubmit}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                
                <Button
                  type="button"
                  variant="secondary"
                  className="flex-1"
                  onClick={handleWhatsApp}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
              </div>
            </form>
            
            <div className="bg-secondary rounded-lg p-8">
              <h2 className="font-playfair text-2xl font-semibold mb-6">
                Visit Us
              </h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  +123 456 7890
                </p>
                <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  contact@paindevie.com
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <span className="mr-3">📍</span>
                  123 Main Street, City
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;