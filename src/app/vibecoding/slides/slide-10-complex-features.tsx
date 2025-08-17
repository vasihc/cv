import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Key,
  Lightbulb,
  ArrowRight,
  FolderOpen,
  Code,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ComplexFeaturesSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "⚙️ Сложные фичи",
      mainIdeaTitle: "🎯 Основная идея",
      mainIdeaDesc:
        "Если фича сложная, не стоит сразу доверять её реализацию LLM внутри большого проекта. Лучше сначала собрать её как отдельный маленький проект/песочницу, а потом интегрировать.",
      practiceTitle: "🔑 Практика и советы",
      cleanEnvTitle: "1. Чистая среда",
      cleanEnvPoint1:
        "• Новую сложную фичу лучше реализовать в отдельном репо или папке.",
      cleanEnvPoint2: "• Так проще отладить без помех от старого кода.",
      referenceTitle: "2. Референс-имплементация",
      referencePoint1:
        "• Можно найти готовый пример на GitHub и попросить LLM повторить подход.",
      referencePoint2:
        "• Или сделать минимальный прототип самому, а затем адаптировать.",
      modularityTitle: "3. Модульность",
      modularityPoint1:
        "• Разделяй проект на маленькие файлы и сервисы с чётким API.",
      modularityPoint2:
        "• LLM легче работает, если есть ясные границы и стабильный внешний интерфейс.",
      apiFirstTitle: "4. API-first подход",
      apiFirstPoint1:
        "• Главное — чтобы тесты и интерфейс API оставались стабильными.",
      apiFirstPoint2:
        "• Внутренности можно менять, если внешнее поведение не ломается.",
      additionalTitle: "💡 Дополнение",
      additionalDesc:
        "Модульность снижает риски: меньше зависимостей → меньше неожиданных поломок.",
      miniProject: "Мини-проект/папка с отдельной фичей",
      integration: "↓ интеграция",
      mainCode: "Основной код",
      prototypeFirst: "«Сначала прототип → потом интеграция»",
    },
    en: {
      title: "⚙️ Complex Features",
      mainIdeaTitle: "🎯 Main Idea",
      mainIdeaDesc:
        "If a feature is complex, don't immediately trust its implementation to LLM within a large project. Better to first build it as a separate small project/sandbox, then integrate.",
      practiceTitle: "🔑 Practice and Tips",
      cleanEnvTitle: "1. Clean Environment",
      cleanEnvPoint1:
        "• Better to implement a new complex feature in a separate repo or folder.",
      cleanEnvPoint2: "• Easier to debug without interference from old code.",
      referenceTitle: "2. Reference Implementation",
      referencePoint1:
        "• Can find a ready example on GitHub and ask LLM to repeat the approach.",
      referencePoint2: "• Or make a minimal prototype yourself, then adapt.",
      modularityTitle: "3. Modularity",
      modularityPoint1:
        "• Divide the project into small files and services with clear API.",
      modularityPoint2:
        "• LLM works easier if there are clear boundaries and stable external interface.",
      apiFirstTitle: "4. API-first approach",
      apiFirstPoint1:
        "• Main thing is that tests and API interface remain stable.",
      apiFirstPoint2:
        "• Internals can be changed if external behavior doesn't break.",
      additionalTitle: "💡 Additional",
      additionalDesc:
        "Modularity reduces risks: fewer dependencies → fewer unexpected breakdowns.",
      miniProject: "Mini-project/folder with separate feature",
      integration: "↓ integration",
      mainCode: "Main code",
      prototypeFirst: "'Prototype first → then integration'",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* Main idea - Green block */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800">{t.mainIdeaTitle}</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.mainIdeaDesc}
              </p>
            </CardContent>
          </Card>

          {/* Practice and tips - Blue block */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Key className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800 dark:text-blue-300">
                  {t.practiceTitle}
                </h4>
              </div>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <div className="font-semibold text-blue-700 dark:text-blue-300">
                    {t.cleanEnvTitle}
                  </div>
                  <div className="ml-2">{t.cleanEnvPoint1}</div>
                  <div className="ml-2">{t.cleanEnvPoint2}</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700 dark:text-blue-300">
                    {t.referenceTitle}
                  </div>
                  <div className="ml-2">{t.referencePoint1}</div>
                  <div className="ml-2">{t.referencePoint2}</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700 dark:text-blue-300">
                    {t.modularityTitle}
                  </div>
                  <div className="ml-2">{t.modularityPoint1}</div>
                  <div className="ml-2">{t.modularityPoint2}</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700 dark:text-blue-300">
                    {t.apiFirstTitle}
                  </div>
                  <div className="ml-2">{t.apiFirstPoint1}</div>
                  <div className="ml-2">{t.apiFirstPoint2}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional info - Purple block */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 dark:border-purple-700 dark:from-purple-900/20 dark:to-violet-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800 dark:text-purple-300">
                  {t.additionalTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.additionalDesc}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Illustration */}
        <div className="flex items-center justify-center">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 p-6 text-center dark:border-gray-700 dark:from-gray-900/20 dark:to-slate-900/20">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="rounded-lg bg-blue-100 p-3">
                <FolderOpen className="h-8 w-8 text-blue-600" />
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400" />
              <div className="rounded-lg bg-green-100 p-3">
                <Code className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="rounded-md bg-blue-100 p-2 text-blue-800">
                {t.miniProject}
              </div>
              <div className="text-xs text-gray-500">{t.integration}</div>
              <div className="rounded-md bg-green-100 p-2 text-green-800">
                {t.mainCode}
              </div>
            </div>
            <div className="mt-4 rounded-md bg-yellow-100 p-2 text-sm font-medium text-yellow-800">
              {t.prototypeFirst}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
