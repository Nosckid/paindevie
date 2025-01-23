import { useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  
  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-primary transition-colors">
        <Globe size={20} />
        <span>{currentLang}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};