
import { useState } from "react";
import { Globe } from "lucide-react";

type Language = "english" | "hindi";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("english");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "english" ? "hindi" : "english");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-gray-600 hover:text-healthcare-primary transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span>
        {currentLanguage === "english" ? "English" : "हिंदी"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
