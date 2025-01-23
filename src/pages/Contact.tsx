import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MessageSquare, X } from "lucide-react";
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
  const [showCallOptions, setShowCallOptions] = useState(false);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please provide your email and message.",
        variant: "destructive",
      });
      return;
    }

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
      setShowCallOptions(true);
    } else {
      toast({
        title: "Contact Number",
        description: "+123 456 7890",
      });
    }
  };

  const handleDirectCall = () => {
    setShowCallOptions(false);
    window.location.href = "tel:+1234567890";
  };

  const handleWhatsAppCall = () => {
    setShowCallOptions(false);
    window.location.href = "https://wa.me/1234567890";
  };

  const closeCallOptions = () => {
    setShowCallOptions(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            Contact Us
          </h1>

          <form onSubmit={handleSubmitEmail} className="space-y-6">
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
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
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
              <Button type="submit" className="flex-1">
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

          {showCallOptions && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeCallOptions}
            >
              <div
                className="bg-white rounded-lg p-6 shadow-lg w-80"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Choose Call Method</h2>
                  <button onClick={closeCallOptions} className="text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <Button
                    type="button"
                    variant="default"
                    onClick={handleDirectCall}
                    className="w-full"
                  >
                    Direct Call
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleWhatsAppCall}
                    className="w-full"
                  >
                    WhatsApp Call
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
