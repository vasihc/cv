import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  AlertTriangle,
  Lightbulb,
  Bot,
  Copy,
  RotateCcw,
  Layers,
  FileText,
  Zap,
  Wrench,
} from "lucide-react";

export function BugFixSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">🐞 Bug Fixes</h2>

      {/* Main content with code block */}
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
                Первый шаг при баге — скопировать сообщение об ошибке и вставить
                его в LLM. Часто этого достаточно, чтобы AI сам нашёл и исправил
                проблему.
              </p>
            </CardContent>
          </Card>

          {/* Problem */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-600 p-2">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-red-800">⚠️ Проблема</h4>
              </div>
              <p className="text-sm text-gray-700">
                LLM при повторных фиксах может «наращивать слои мусорного кода»
                и усложнять проект.
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
                  • <Copy className="inline h-3 w-3" /> Копипаст ошибки → AI сам
                  понимает причину
                </li>
                <li>
                  • <RotateCcw className="inline h-3 w-3" /> Reset перед каждой
                  новой попыткой (git reset)
                </li>
                <li>
                  • <Layers className="inline h-3 w-3" /> Многоуровневое
                  мышление: сначала причины, потом код
                </li>
                <li>
                  • <FileText className="inline h-3 w-3" /> Логирование помогает
                  точнее диагностировать
                </li>
                <li>
                  • <Zap className="inline h-3 w-3" /> Смена модели (Claude,
                  OpenAI, Gemini)
                </li>
                <li>
                  • <Wrench className="inline h-3 w-3" /> Точный фикс на чистой
                  базе
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Bug Bot */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800">
                  🤖 Bug Bot (Cursor)
                </h4>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Bug Bot</strong> от Cursor запускается при создании pull
                request и делает review. Иногда находит действительно важные
                баги, но иногда докапывается до мелочей. В целом полезно.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right side - terminal simulation */}
        <div className="flex items-center justify-center">
          <div className="h-[28rem] w-full rounded-lg border border-gray-200 bg-gray-900 p-4 font-mono text-xs">
            {/* Terminal header */}
            <div className="mb-3 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400">Terminal - npm start</span>
            </div>

            {/* Error message */}
            <div className="space-y-2">
              <div className="text-red-400">
                <div>
                  Error: Cannot read property &apos;x&apos; of undefined
                </div>
                <div className="text-gray-500">
                  {" "}
                  at processData (app.js:15:23)
                </div>
                <div className="text-gray-500">
                  {" "}
                  at handleSubmit (app.js:8:12)
                </div>
                <div className="text-gray-500">
                  {" "}
                  at HTMLFormElement.onsubmit
                </div>
              </div>

              <div className="text-gray-300">...</div>

              {/* AI suggestion */}
              <div className="rounded border border-green-600 bg-green-900/20 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <span className="font-semibold text-green-400">Bug Bot</span>
                </div>
                <div className="text-xs text-green-300">
                  <div>
                    {"// Fix: Add null check before accessing property"}
                  </div>
                  <div className="text-gray-400">
                    function processData(data) {"{"}
                  </div>
                  <div className="text-gray-400">
                    {" "}
                    if (!data || !data.x) {"{"}
                  </div>
                  <div className="text-green-400"> return null;</div>
                  <div className="text-gray-400"> {"}"}</div>
                  <div className="text-gray-400"> return data.x;</div>
                  <div className="text-gray-400">{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
