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

export function ChooseStackSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">
        🛠️ Выбор правильного стека
      </h2>

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
                <h4 className="font-bold text-green-800">🎯 Основная идея</h4>
              </div>
              <p className="text-sm text-gray-700">
                Чем популярнее и стандартизированнее стек, тем проще с ним
                работает LLM.
              </p>
            </CardContent>
          </Card>

          {/* Practice and tips */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800">
                  🔑 Практика и советы
                </h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • <Database className="inline h-3 w-3" /> Supabase / Firebase
                  → быстрый старт (auth, storage, realtime)
                </li>
                <li>
                  • <Database className="inline h-3 w-3" /> Postgres / MongoDB →
                  надёжные базы данных, легко поддерживаются AI
                </li>
                <li>
                  • <Palette className="inline h-3 w-3" /> TailwindCSS +
                  shadcn/ui → быстрые интерфейсы, LLM хорошо пишет стили
                </li>
                <li>
                  • <Code className="inline h-3 w-3" /> Node.js + TypeScript →
                  стандартный выбор для серверного JS
                </li>
                <li>
                  • <Code className="inline h-3 w-3" /> Python, PHP, Ruby →
                  проверенные экосистемы
                </li>
                <li>
                  • <Smartphone className="inline h-3 w-3" /> Swift → для iOS
                  приложений даже новичку доступно с помощью AI
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
                <h4 className="font-bold text-orange-800">🔗 Ресурс</h4>
              </div>
              <p className="text-sm text-gray-700">
                Собранные инструменты для вайбкодинга:
              </p>
              <a
                href="https://vibecoding.tools"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700"
              >
                👉 https://vibecoding.tools
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
                Популярные технологии
              </h3>

              {/* Logo grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* Postgres */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Postgres
                  </span>
                </div>

                {/* Firebase */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Firebase
                  </span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Node.js
                  </span>
                </div>

                {/* Python */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Python
                  </span>
                </div>

                {/* Swift */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    <Smartphone className="h-6 w-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Swift
                  </span>
                </div>

                {/* Tailwind */}
                <div className="flex flex-col items-center rounded-lg bg-white p-3 shadow-sm">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <Palette className="h-6 w-6 text-cyan-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-800">
                  &ldquo;Чем популярнее стек — тем лучше работает AI&rdquo;
                </p>
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
