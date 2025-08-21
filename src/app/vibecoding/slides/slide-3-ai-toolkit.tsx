import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Brain, User, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function AIToolkitSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🧠 Анализ задачи и планирование",
      step1Title: "1. Сбор контекста",
      step1Subtitle: "Собрать все детали задачи",
      step1Desc:
        "Соберите как можно больше контекста о задаче. Поймите требования, ограничения и существующую кодовую базу для создания полной картины.",
      step2Title: "2. Старший архитектор",
      step2Subtitle: "20+ лет опыта",
      step2Desc:
        "Попросите LLM действовать как старший программный архитектор с 20+ годами опыта. Запросите правильную архитектуру для конкретной задачи.",
      step3Title: "3. План реализации",
      step3Subtitle: "Конкретные шаги выполнения",
      step3Desc:
        "Получите конкретный, выполнимый план реализации. Разбейте задачу на четкие шаги с вехами и критериями успеха.",
      processTitle: "Процесс",
      context: "Контекст",
      architecture: "Архитектура",
      plan: "План",
      resultTitle: "Результат",
      planFile: "task-planning.md",
      planHeader: "# План реализации задачи",
      contextSection: "## Контекст",
      requirements: "- Требования: [описание требований]",
      constraints: "- Ограничения: [технические ограничения]",
      architectureSection: "## Архитектура",
      pattern: "- Паттерн: [выбранный паттерн]",
      structure: "- Структура: [организация кода]",
      interaction: "- Взаимодействие: [связи компонентов]",
      implementationSection: "## План реализации",
      step1: "1. [Шаг 1] - [описание]",
      step2: "2. [Шаг 2] - [описание]",
      step3: "3. [Шаг 3] - [описание]",
    },
    en: {
      title: "🧠 Task Analysis and Planning",
      step1Title: "1. Gather Context",
      step1Subtitle: "Collect all task details",
      step1Desc:
        "Gather as much context as possible about the task. Understand requirements, constraints, and existing codebase to create a complete picture.",
      step2Title: "2. Senior Architect",
      step2Subtitle: "20+ years experience",
      step2Desc:
        "Ask the LLM to act as a senior software architect with 20+ years of experience. Request the right architecture for the specific task.",
      step3Title: "3. Implementation Plan",
      step3Subtitle: "Concrete execution steps",
      step3Desc:
        "Get a concrete, actionable implementation plan. Break down the task into clear steps with milestones and success criteria.",
      processTitle: "Process",
      context: "Context",
      architecture: "Architecture",
      plan: "Plan",
      resultTitle: "Result",
      planFile: "task-planning.md",
      planHeader: "# Task Implementation Plan",
      contextSection: "## Context",
      requirements: "- Requirements: [requirements description]",
      constraints: "- Constraints: [technical constraints]",
      architectureSection: "## Architecture",
      pattern: "- Pattern: [selected pattern]",
      structure: "- Structure: [code organization]",
      interaction: "- Interaction: [component relationships]",
      implementationSection: "## Implementation Plan",
      step1: "1. [Step 1] - [description]",
      step2: "2. [Step 2] - [description]",
      step3: "3. [Step 3] - [description]",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-6 md:space-y-12">
      <h2 className="mb-4 md:mb-8 text-center text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
        {/* Step 1: Gather Context */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-shadow hover:shadow-lg dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-600 p-2 md:p-3">
                <Brain className="h-5 w-5 md:h-7 md:w-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300">
                  {t.step1Title}
                </h4>
                <p className="text-sm md:text-base text-blue-600 dark:text-blue-400">
                  {t.step1Subtitle}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {t.step1Desc}
            </p>
          </CardContent>
        </Card>

        {/* Step 2: Senior Architect Role */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 transition-shadow hover:shadow-lg dark:border-purple-700 dark:from-purple-900/20 dark:to-violet-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-600 p-2 md:p-3">
                <User className="h-5 w-5 md:h-7 md:w-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-purple-800 dark:text-purple-300">
                  {t.step2Title}
                </h4>
                <p className="text-sm md:text-base text-purple-600 dark:text-purple-400">
                  {t.step2Subtitle}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {t.step2Desc}
            </p>
          </CardContent>
        </Card>

        {/* Step 3: Implementation Plan */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-600 p-2 md:p-3">
                <FileText className="h-5 w-5 md:h-7 md:w-7 text-white" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-green-800 dark:text-green-300">
                  {t.step3Title}
                </h4>
                <p className="text-sm md:text-base text-green-600 dark:text-green-400">
                  {t.step3Subtitle}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {t.step3Desc}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Simple Summary */}
      <div className="mt-6 md:mt-12 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-4 md:p-8 dark:border-gray-700 dark:from-gray-900/20 dark:to-blue-900/20">
        <h4 className="mb-4 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
          {t.processTitle}
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2 md:gap-3">
            <Brain className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
            <span>{t.context}</span>
          </div>
          <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400 rotate-90 md:rotate-0" />
          <div className="flex items-center gap-2 md:gap-3">
            <User className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
            <span>{t.architecture}</span>
          </div>
          <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-gray-400 rotate-90 md:rotate-0" />
          <div className="flex items-center gap-2 md:gap-3">
            <FileText className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
            <span>{t.plan}</span>
          </div>
        </div>
      </div>

      {/* Result Block */}
      <div className="mt-4 md:mt-8 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-green-50 p-4 md:p-8 dark:border-gray-700 dark:from-gray-900/20 dark:to-green-900/20">
        <h4 className="mb-4 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
          {t.resultTitle}
        </h4>
        <div className="rounded-lg border border-gray-300 bg-white p-3 md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 md:h-5 md:w-5 text-gray-600 dark:text-gray-400" />
            <span className="font-mono text-xs md:text-sm text-gray-600 dark:text-gray-400">
              {t.planFile}
            </span>
          </div>
          <div className="rounded bg-gray-900 p-2 md:p-4 font-mono text-xs md:text-sm text-green-400 overflow-x-auto">
            <div className="text-gray-400">{t.planHeader}</div>
            <div className="mt-2 text-gray-400">{t.contextSection}</div>
            <div className="ml-4 text-green-400">{t.requirements}</div>
            <div className="ml-4 text-green-400">{t.constraints}</div>
            <div className="mt-2 text-gray-400">{t.architectureSection}</div>
            <div className="ml-4 text-green-400">{t.pattern}</div>
            <div className="ml-4 text-green-400">{t.structure}</div>
            <div className="ml-4 text-green-400">{t.interaction}</div>
            <div className="mt-2 text-gray-400">{t.implementationSection}</div>
            <div className="ml-4 text-green-400">{t.step1}</div>
            <div className="ml-4 text-green-400">{t.step2}</div>
            <div className="ml-4 text-green-400">{t.step3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
