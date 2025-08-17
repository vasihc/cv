import { Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSlide() {
  const { language } = useLanguage();

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
    <div className="space-y-8">
      {/* Terminal-style header */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400">~/rfounders-mobile</span>
          </div>
          <div className="mt-2">
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">whoami</span>
          </div>
          <div className="mt-1 text-green-400">vasilii-glebov</div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left column - Main content */}
        <div className="space-y-6">
          {/* Code reference */}
          <div className="rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-800">
            <div className="text-gray-600 dark:text-gray-300">
              <span className="text-blue-600">const</span>{" "}
              <span className="text-purple-600">presentation</span> = {"{"}
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>

          {/* Speaker info */}
          <div className="space-y-2">
            <div className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold">{t.speaker}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t.date}
            </div>
          </div>

          {/* Closing brace */}
          <div className="rounded-lg bg-gray-100 p-4 font-mono text-sm dark:bg-gray-800">
            <div className="text-gray-600 dark:text-gray-300">{"}"}</div>
          </div>
        </div>

        {/* Right column - Photo */}
        <div className="flex items-center justify-center">
          <div className="h-32 w-32 overflow-hidden rounded-lg">
            <img
              src="/me.jpg"
              alt="Vasilii Glebov"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
