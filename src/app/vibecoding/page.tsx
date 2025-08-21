"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Globe, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
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
    <div className="flex min-h-[60vh] flex-col justify-center py-4 md:py-0">
      {slide.content}
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 md:gap-2">
      <Button
        variant={language === "ru" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("ru")}
        className="min-w-[40px] text-xs md:min-w-[60px] md:text-sm"
      >
        RU
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="min-w-[40px] text-xs md:min-w-[60px] md:text-sm"
      >
        EN
      </Button>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
}

function VibeCodingContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowMenu(false);
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

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        if (currentSlide < slides.length - 1) {
          nextSlide();
        }
      } else {
        // Swipe right - previous slide
        if (currentSlide > 0) {
          prevSlide();
        }
      }
    }
  };

  return (
    <main 
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <LanguageSwitcher />
          <Badge variant="secondary" className="text-xs">
            {currentSlide + 1} / {slides.length}
          </Badge>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowMenu(!showMenu)}
              className="h-8 w-8 p-0"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 md:hidden">
          <div className="grid grid-cols-3 gap-2 p-4 pt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-lg p-4 text-sm font-medium transition-colors ${
                  index === currentSlide
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:block">
        {/* Language Switcher */}
        <div className="fixed left-4 top-4 z-50">
          <LanguageSwitcher />
        </div>

        {/* Theme Toggle */}
        <div className="fixed bottom-4 left-4 z-50">
          <ThemeToggle />
        </div>

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

        {/* Slide Counter */}
        <div className="fixed bottom-4 right-4 z-50">
          <Badge variant="secondary">
            {currentSlide + 1} / {slides.length}
          </Badge>
        </div>
      </div>

      {/* Slide Indicators - Desktop and Mobile */}
      <div className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 transform md:z-50">
        <div className="flex gap-1 rounded-full bg-white/80 p-2 backdrop-blur-sm dark:bg-gray-800/80 md:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all md:h-3 md:w-3 ${
                index === currentSlide
                  ? "w-6 bg-blue-600 md:w-8"
                  : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="fixed bottom-20 left-0 right-0 z-30 flex justify-between px-4 md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm dark:bg-gray-800/90"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-32 pt-16 md:px-8 md:pb-8 md:pt-8">
        <SlideContent slide={slides[currentSlide]} />
      </div>

      {/* Swipe Hint for Mobile */}
      {currentSlide === 0 && (
        <div className="fixed bottom-32 left-1/2 z-20 -translate-x-1/2 transform text-center md:hidden">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Swipe to navigate →
          </p>
        </div>
      )}
    </main>
  );
}

export default function VibeCodingPage() {
  return (
    <LanguageProvider>
      <VibeCodingContent />
    </LanguageProvider>
  );
}