import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Lightbulb,
  Brain,
  ExternalLink,
  Database,
  Code,
  Smartphone,
  Palette,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ChooseStackSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🛠️ Выбор правильного стека",
      mainIdeaTitle: "🎯 Основная идея",
      mainIdeaDesc:
        "Чем популярнее и стандартизированнее стек, тем проще с ним работает LLM.",
      practiceTitle: "🔑 Практика и советы",
      supabase:
        "• Supabase / Firebase → быстрый старт (auth, storage, realtime)",
      postgres:
        "• Postgres / MongoDB → надёжные базы данных, легко поддерживаются AI",
      tailwind:
        "• TailwindCSS + shadcn/ui → быстрые интерфейсы, LLM хорошо пишет стили",
      nodejs: "• Node.js + TypeScript → стандартный выбор для серверного JS",
      python: "• Python, PHP, Ruby → проверенные экосистемы",
      swift: "• Swift → для iOS приложений даже новичку доступно с помощью AI",
      resourceTitle: "🔗 Ресурс",
      resourceDesc: "Собранные инструменты для вайбкодинга:",
      resourceUrl: "👉 https://vibecoding.tools",
      popularTechTitle: "Популярные технологии",
      postgresLabel: "Postgres",
      firebaseLabel: "Firebase",
      nodejsLabel: "Node.js",
      pythonLabel: "Python",
      swiftLabel: "Swift",
      tailwindLabel: "Tailwind",
      quote: "«Чем популярнее стек — тем лучше работает AI»",
    },
    en: {
      title: "🛠️ Choosing the Right Stack",
      mainIdeaTitle: "🎯 Main Idea",
      mainIdeaDesc:
        "The more popular and standardized the stack, the easier it is for LLM to work with it.",
      practiceTitle: "🔑 Practice and Tips",
      supabase: "• Supabase / Firebase → quick start (auth, storage, realtime)",
      postgres:
        "• Postgres / MongoDB → reliable databases, easily maintained by AI",
      tailwind:
        "• TailwindCSS + shadcn/ui → fast interfaces, LLM writes styles well",
      nodejs: "• Node.js + TypeScript → standard choice for server-side JS",
      python: "• Python, PHP, Ruby → proven ecosystems",
      swift: "• Swift → for iOS apps even accessible to beginners with AI help",
      resourceTitle: "🔗 Resource",
      resourceDesc: "Collected tools for vibe coding:",
      resourceUrl: "👉 https://vibecoding.tools",
      popularTechTitle: "Popular Technologies",
      postgresLabel: "Postgres",
      firebaseLabel: "Firebase",
      nodejsLabel: "Node.js",
      pythonLabel: "Python",
      swiftLabel: "Swift",
      tailwindLabel: "Tailwind",
      quote: "'The more popular the stack — the better AI works'",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">{t.title}</h2>

      {/* Main content with illustration */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* Main idea */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800">{t.mainIdeaTitle}</h4>
              </div>
              <p className="text-sm text-gray-700">{t.mainIdeaDesc}</p>
            </CardContent>
          </Card>

          {/* Practice and tips */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800">{t.practiceTitle}</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • <Database className="inline h-3 w-3" /> {t.supabase}
                </li>
                <li>
                  • <Database className="inline h-3 w-3" /> {t.postgres}
                </li>
                <li>
                  • <Palette className="inline h-3 w-3" /> {t.tailwind}
                </li>
                <li>
                  • <Code className="inline h-3 w-3" /> {t.nodejs}
                </li>
                <li>
                  • <Code className="inline h-3 w-3" /> {t.python}
                </li>
                <li>
                  • <Smartphone className="inline h-3 w-3" /> {t.swift}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Resource */}
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-orange-600 p-2">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-orange-800">{t.resourceTitle}</h4>
              </div>
              <p className="text-sm text-gray-700">{t.resourceDesc}</p>
              <a
                href="https://vibecoding.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700"
              >
                {t.resourceUrl}
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Right side - tech stack illustration */}
        <div className="flex items-center justify-center">
          <div className="h-[28rem] w-full rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-100 p-6">
            {/* Tech logos grid */}
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                {t.popularTechTitle}
              </h3>

              {/* Logo grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Postgres */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.postgresLabel}
                  </span>
                </div>

                {/* Firebase */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.firebaseLabel}
                  </span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.nodejsLabel}
                  </span>
                </div>

                {/* Python */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.pythonLabel}
                  </span>
                </div>

                {/* Swift */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.swiftLabel}
                  </span>
                </div>

                {/* Tailwind */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <Palette className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.tailwindLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-800">{t.quote}</p>
                <div className="mt-2 flex justify-center">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
