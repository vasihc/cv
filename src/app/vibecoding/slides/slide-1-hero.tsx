import { Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export function HeroSlide() {
  const { language } = useLanguage();
  const [typedCommand, setTypedCommand] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Typing animation for whoami command
  useEffect(() => {
    const command = "whoami";
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= command.length) {
        setTypedCommand(command.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        // Show response after command is typed
        setTimeout(() => {
          setShowResponse(true);
        }, 500);
      }
    }, 150);
    
    return () => clearInterval(typeInterval);
  }, []);
  
  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const content = {
    ru: {
      title: "🚀 R-Founders Mobile Apps",
      subtitle: "Ускорение разработки с AI",
      speaker: "Глебов Василий",
      date: "Август 2025",
    },
    en: {
      title: "🚀 R-Founders Mobile Apps",
      subtitle: "Accelerating Development with AI",
      speaker: "Vasilii Glebov",
      date: "August 2025",
    },
  };

  const t = content[language];

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    <div className="space-y-4 md:space-y-8">
      {/* Terminal-style header with shadow */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          {/* Shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl transform translate-y-2"></div>
          
          {/* Terminal */}
          <div className="relative rounded-lg bg-gray-900 p-2 font-mono text-xs md:p-4 md:text-sm text-green-400 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
              </div>
              <span className="text-gray-400 text-xs md:text-sm">~/rfounders-mobile</span>
            </div>
            <div className="mt-2">
              <span className="text-blue-400">$</span>{" "}
              <span className="text-white">
                {typedCommand}
                {typedCommand.length < 6 && (
                  <span className={`inline-block w-2 h-4 bg-white ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                    _
                  </span>
                )}
              </span>
            </div>
            {showResponse && (
              <div className="mt-1 text-green-400 animate-fadeIn">
                <span className="inline-block" style={{ animation: 'slideUp 0.5s ease-out' }}>
                  vasilii-glebov
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
        {/* Left column - Main content */}
        <div className="space-y-3 md:space-y-6 order-2 md:order-1">
          {/* Code reference */}
          <div className="rounded-lg bg-gray-100 p-2 md:p-4 font-mono text-xs md:text-sm dark:bg-gray-800">
            <div className="text-gray-600 dark:text-gray-300">
              <span className="text-blue-600">const</span>{" "}
              <span className="text-purple-600">presentation</span> = {"{"}
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="space-y-2 md:space-y-3">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {t.title}
            </h1>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          {/* Speaker info */}
          <div className="space-y-1 md:space-y-2">
            <div className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{t.speaker}</span>
            </div>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              {t.date}
            </div>
          </div>

          {/* Closing brace */}
          <div className="rounded-lg bg-gray-100 p-2 md:p-4 font-mono text-xs md:text-sm dark:bg-gray-800">
            <div className="text-gray-600 dark:text-gray-300">{"}"}</div>
          </div>
        </div>

        {/* Right column - Photo */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <div className="h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-lg">
            <img
              src="/me.jpg"
              alt="Vasilii Glebov"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
