import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Brain, User, FileText, ArrowRight } from "lucide-react";

export function AIToolkitSlide() {
  return (
    <div className="space-y-12">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Анализ задачи и планирование
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Step 1: Gather Context */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-600 p-3">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-800">
                  1. Сбор контекста
                </h4>
                <p className="text-base text-blue-600">
                  Собрать все детали задачи
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-gray-700">
              Соберите как можно больше контекста о задаче. Поймите требования,
              ограничения и существующую кодовую базу для создания полной
              картины.
            </p>
          </CardContent>
        </Card>

        {/* Step 2: Senior Architect Role */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-600 p-3">
                <User className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-800">
                  2. Старший архитектор
                </h4>
                <p className="text-base text-purple-600">20+ лет опыта</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-gray-700">
              Попросите LLM действовать как старший программный архитектор с 20+
              годами опыта. Запросите правильную архитектуру для конкретной
              задачи.
            </p>
          </CardContent>
        </Card>

        {/* Step 3: Implementation Plan */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-600 p-3">
                <FileText className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-800">
                  3. План реализации
                </h4>
                <p className="text-base text-green-600">
                  Конкретные шаги выполнения
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-gray-700">
              Получите конкретный, выполнимый план реализации. Разбейте задачу
              на четкие шаги с вехами и критериями успеха.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Simple Summary */}
      <div className="mt-12 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-8">
        <h4 className="mb-4 text-xl font-semibold text-gray-800">Процесс</h4>
        <div className="flex items-center justify-center gap-6 text-base text-gray-700">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-blue-600" />
            <span>Контекст</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-purple-600" />
            <span>Архитектура</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-green-600" />
            <span>План</span>
          </div>
        </div>
      </div>

      {/* Result Block */}
      <div className="mt-8 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-green-50 p-8">
        <h4 className="mb-4 text-xl font-semibold text-gray-800">Результат</h4>
        <div className="rounded-lg border border-gray-300 bg-white p-6">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-gray-600" />
            <span className="font-mono text-sm text-gray-600">
              task-planning.md
            </span>
          </div>
          <div className="rounded bg-gray-900 p-4 font-mono text-sm text-green-400">
            <div className="text-gray-400"># План реализации задачи</div>
            <div className="mt-2 text-gray-400">## Контекст</div>
            <div className="ml-4 text-green-400">
              - Требования: [описание требований]
            </div>
            <div className="ml-4 text-green-400">
              - Ограничения: [технические ограничения]
            </div>
            <div className="mt-2 text-gray-400">## Архитектура</div>
            <div className="ml-4 text-green-400">
              - Паттерн: [выбранный паттерн]
            </div>
            <div className="ml-4 text-green-400">
              - Структура: [организация кода]
            </div>
            <div className="ml-4 text-green-400">
              - Взаимодействие: [связи компонентов]
            </div>
            <div className="mt-2 text-gray-400">## План реализации</div>
            <div className="ml-4 text-green-400">1. [Шаг 1] - [описание]</div>
            <div className="ml-4 text-green-400">2. [Шаг 2] - [описание]</div>
            <div className="ml-4 text-green-400">3. [Шаг 3] - [описание]</div>
          </div>
        </div>
      </div>
    </div>
  );
}
