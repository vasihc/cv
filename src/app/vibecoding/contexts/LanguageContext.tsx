"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANGUAGE_STORAGE_KEY = "vibecoding-language";

// Function to detect user's language from user-agent
function detectUserLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"; // Default for SSR
  }

  const userAgent = navigator.userAgent || navigator.language || "";
  const language = navigator.language || navigator.languages?.[0] || "";

  // Check if user-agent or language contains Russian indicators
  const isRussian =
    userAgent.toLowerCase().includes("ru") ||
    userAgent.toLowerCase().includes("russian") ||
    language.toLowerCase().startsWith("ru") ||
    language.toLowerCase().includes("ru-ru") ||
    language.toLowerCase().includes("ru_ru");

  return isRussian ? "ru" : "en";
}

// Function to get language from localStorage or detect from user-agent
function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"; // Default for SSR
  }

  // First, try to get from localStorage
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
  if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "en")) {
    return savedLanguage;
  }

  // If no saved language, detect from user-agent
  return detectUserLanguage();
}

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en"); // Start with English as fallback
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Get initial language from localStorage or detect from user-agent
    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    setIsInitialized(true);
  }, []);

  // Custom setLanguage function that also saves to localStorage
  const setLanguageWithStorage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    }
  };

  // Show loading spinner until language is detected
  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageWithStorage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
