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

export function ComplexFeaturesSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">⚙️ Сложные фичи</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* Main idea - Green block */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800">🎯 Основная идея</h4>
              </div>
              <p className="text-sm text-gray-700">
                Если фича сложная, не стоит сразу доверять её реализацию LLM
                внутри большого проекта. Лучше сначала собрать её как отдельный
                маленький проект/песочницу, а потом интегрировать.
              </p>
            </CardContent>
          </Card>

          {/* Practice and tips - Blue block */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Key className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800">
                  🔑 Практика и советы
                </h4>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <div className="font-semibold text-blue-700">
                    1. Чистая среда
                  </div>
                  <div className="ml-2">
                    • Новую сложную фичу лучше реализовать в отдельном репо или
                    папке.
                  </div>
                  <div className="ml-2">
                    • Так проще отладить без помех от старого кода.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700">
                    2. Референс-имплементация
                  </div>
                  <div className="ml-2">
                    • Можно найти готовый пример на GitHub и попросить LLM
                    повторить подход.
                  </div>
                  <div className="ml-2">
                    • Или сделать минимальный прототип самому, а затем
                    адаптировать.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700">
                    3. Модульность
                  </div>
                  <div className="ml-2">
                    • Разделяй проект на маленькие файлы и сервисы с чётким API.
                  </div>
                  <div className="ml-2">
                    • LLM легче работает, если есть ясные границы и стабильный
                    внешний интерфейс.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-blue-700">
                    4. API-first подход
                  </div>
                  <div className="ml-2">
                    • Главное — чтобы тесты и интерфейс API оставались
                    стабильными.
                  </div>
                  <div className="ml-2">
                    • Внутренности можно менять, если внешнее поведение не
                    ломается.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional info - Purple block */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800">💡 Дополнение</h4>
              </div>
              <p className="text-sm text-gray-700">
                Модульность снижает риски: меньше зависимостей → меньше
                неожиданных поломок.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Illustration */}
        <div className="flex items-center justify-center">
          <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 p-6 text-center">
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
                Мини-проект/папка с отдельной фичей
              </div>
              <div className="text-xs text-gray-500">↓ интеграция</div>
              <div className="rounded-md bg-green-100 p-2 text-green-800">
                Основной код
              </div>
            </div>
            <div className="mt-4 rounded-md bg-yellow-100 p-2 text-sm font-medium text-yellow-800">
              «Сначала прототип → потом интеграция»
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
