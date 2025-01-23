import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const [language, setLanguage] = useState<string>("fr");
  const [showLanguagePrompt, setShowLanguagePrompt] = useState<boolean>(false);

  // Check user's system language and set prompt accordingly
  useEffect(() => {
    const systemLanguage = navigator.language.slice(0, 2); // Get first two letters of the system language (e.g., "en", "fr")
    if (systemLanguage !== language) {
      setShowLanguagePrompt(true);
    }
  }, [language]);

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    setShowLanguagePrompt(false); // Close the language prompt
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 px-4">
        <div className="container mx-auto max-w-3xl">
          {showLanguagePrompt && (
            <div className="bg-yellow-200 p-4 rounded mb-6">
              <p className="text-center">
                Voulez-vous changer la langue du site en {language === "fr" ? "anglais" : "français"} ?
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={() => handleLanguageChange(language === "fr" ? "en" : "fr")}
                >
                  Oui
                </button>
                <button
                  className="bg-gray-500 text-white p-2 rounded"
                  onClick={() => setShowLanguagePrompt(false)}
                >
                  Non
                </button>
              </div>
            </div>
          )}

          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            {language === "fr" ? "À propos de PAIN de VIE" : "About PAIN de VIE"}
          </h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-center text-gray-600">
              {language === "fr"
                ? "PAIN de VIE, est une entreprise béninoise fondée et dirigée par Madame DJIDONOU Marie épouse HOUMBIE, L’entreprise a fait ses débuts dans la redistribution des fruits notamment, les pommes, raisins, poires et prunes, qu’elle acquérait auprès des importateurs d’alors, chemin faisant avec le dynamisme de sa directrice qui a su gagné la confiance des fournisseurs étrangers, l’entreprise a grandi, s’est élargi et a donc commencé l’importation directe et la redistribution de ses propres produits sur les marché béninois et nigérians. En 2012, le siège de PAIN de VIE fut construit ce qui lui a donné une meilleure visibilité et confiance auprès de ses partenaires. C’est alors qu’elle étendu ses activités dans le domaine du surgelé, ainsi donc depuis 2013 elle a commencé l’importation des produits surgelés et s’est ainsi petitement de par son leadership faite une place sur un marché qui était tenu par les magnants du domaine. A la date d’aujourd’hui ce domaine a pris un ascendant sur ses autres domaines d’activités."
                : "PAIN de VIE is a Beninese company founded and managed by Madame DJIDONOU Marie, wife of HOUMBIE. The company began by redistributing fruits such as apples, grapes, pears, and plums, which it acquired from importers of the time. As the dynamic director gained the trust of foreign suppliers, the company grew, expanded, and began importing and redistributing its own products in Benin and Nigeria. In 2012, the PAIN de VIE headquarters was built, giving it better visibility and trust with partners. It then expanded into the frozen food sector, starting in 2013 with the importation of frozen products. Through leadership, it gradually made a place for itself in a market dominated by industry giants. Today, this sector has surpassed its other business areas."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
