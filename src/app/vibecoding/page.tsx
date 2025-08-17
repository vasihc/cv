"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Globe, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import {
  HeroSlide,
  AIRevolutionSlide,
  AIToolkitSlide,
  ApproachSlide,
  MCPSlide,
  ModelsSlide,
  VersionControlSlide,
  TestsSlide,
  BugFixSlide,
  ComplexFeaturesSlide,
  ChooseStackSlide,
  AdvancedSlide,
  ContactSlide,
} from "./slides";

const slides = [
  {
    id: 1,
    content: <HeroSlide />,
  },
  {
    id: 2,
    content: <AIRevolutionSlide />,
  },
  {
    id: 3,
    content: <AIToolkitSlide />,
  },
  {
    id: 4,
    content: <ApproachSlide />,
  },
  {
    id: 5,
    content: <MCPSlide />,
  },
  {
    id: 6,
    content: <ModelsSlide />,
  },
  {
    id: 7,
    content: <VersionControlSlide />,
  },
  {
    id: 8,
    content: <TestsSlide />,
  },
  {
    id: 9,
    content: <BugFixSlide />,
  },
  {
    id: 10,
    content: <ComplexFeaturesSlide />,
  },
  {
    id: 11,
    content: <ChooseStackSlide />,
  },
  {
    id: 12,
    content: <AdvancedSlide />,
  },
  {
    id: 13,
    content: <ContactSlide />,
  },
];

function SlideContent({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center">
      {slide.content}
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed left-4 top-4 z-50">
      <div className="flex gap-2">
        <Button
          variant={language === "ru" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("ru")}
          className="min-w-[60px]"
        >
          RU
        </Button>
        <Button
          variant={language === "en" ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="min-w-[60px]"
        >
          EN
        </Button>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="h-8 w-8 p-0"
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

function VibeCodingContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Slide Navigation */}
      <div className="fixed right-4 top-4 z-50">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 z-50">
        <Badge variant="secondary">
          {currentSlide + 1} / {slides.length}
        </Badge>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <SlideContent slide={slides[currentSlide]} />
      </div>
    </main>
  );
}

export default function VibeCodingPage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <VibeCodingContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
