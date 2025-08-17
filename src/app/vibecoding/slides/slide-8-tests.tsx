import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TestTube,
  CheckCircle,
  AlertTriangle,
  Brain,
  Shield,
  GitCommit,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function TestsSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🧪 Тесты",
      problemTitle: "⚠️ Проблема",
      problemDesc:
        "LLM часто вносит ненужные изменения в другие части проекта. Один фикс → ломается что-то ещё.",
      solutionTitle: "✅ Решение",
      solutionDesc:
        "Интеграционные тесты ловят регрессии и задают «жёсткие правила» для модели.",
      practiceTitle: "✍️ Практика",
      practicePoint1:
        "• Начните с написания тестов вручную (ручной каркас → AI дополняет).",
      practicePoint2: "• После каждой новой фичи: тесты → проверка → commit.",
      highLevelTitle: "🔗 Высокоуровневые тесты",
      highLevelDesc:
        "Фокус на end-to-end сценариях, имитирующих реальные действия пользователя.",
      terminalTitle: "Terminal - npm test",
      test1: "✓ Test 1: User auth",
      test2: "✓ Test 2: Form validation",
      test3: "✓ Test 3: API integration",
      test4: "✓ Test 4: Database ops",
      test5: "✓ Test 5: UI components",
      test6: "✓ Test 6: Error handling",
      test7: "✓ Test 7: Performance",
      test8: "✓ Test 8: Security",
      test15: "✓ Test 15: E2E flow",
      test23: "✓ Test 23: Integration",
      test31: "✓ Test 31: Unit tests",
      allPassed: "✓ All tests passed",
      summary: "Tests: 31 passed, 0 failed",
      time: "Time: 2.4s",
    },
    en: {
      title: "🧪 Tests",
      problemTitle: "⚠️ Problem",
      problemDesc:
        "LLM often makes unnecessary changes to other parts of the project. One fix → something else breaks.",
      solutionTitle: "✅ Solution",
      solutionDesc:
        "Integration tests catch regressions and set 'hard rules' for the model.",
      practiceTitle: "✍️ Practice",
      practicePoint1:
        "• Start by writing tests manually (manual framework → AI complements).",
      practicePoint2:
        "• After each new feature: tests → verification → commit.",
      highLevelTitle: "🔗 High-level tests",
      highLevelDesc:
        "Focus on end-to-end scenarios that simulate real user actions.",
      terminalTitle: "Terminal - npm test",
      test1: "✓ Test 1: User auth",
      test2: "✓ Test 2: Form validation",
      test3: "✓ Test 3: API integration",
      test4: "✓ Test 4: Database ops",
      test5: "✓ Test 5: UI components",
      test6: "✓ Test 6: Error handling",
      test7: "✓ Test 7: Performance",
      test8: "✓ Test 8: Security",
      test15: "✓ Test 15: E2E flow",
      test23: "✓ Test 23: Integration",
      test31: "✓ Test 31: Unit tests",
      allPassed: "✓ All tests passed",
      summary: "Tests: 31 passed, 0 failed",
      time: "Time: 2.4s",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        {t.title}
      </h2>

      {/* Main content with image */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* LLM Regression Problem */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50 dark:border-red-700 dark:from-red-900/20 dark:to-pink-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-600 p-2">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-red-800">{t.problemTitle}</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.problemDesc}
              </p>
            </CardContent>
          </Card>

          {/* Test Solution */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800 dark:text-green-300">
                  {t.solutionTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.solutionDesc}
              </p>
            </CardContent>
          </Card>

          {/* Practice */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800 dark:text-blue-300">
                  {t.practiceTitle}
                </h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>{t.practicePoint1}</li>
                <li>{t.practicePoint2}</li>
              </ul>
            </CardContent>
          </Card>

          {/* High-level Tests */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 dark:border-purple-700 dark:from-purple-900/20 dark:to-violet-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <TestTube className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800 dark:text-purple-300">
                  {t.highLevelTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.highLevelDesc}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right side - test results simulation */}
        <div className="flex items-center justify-center">
          <div className="h-[28rem] w-full rounded-lg border border-gray-200 bg-gray-900 p-4 font-mono text-xs">
            {/* Terminal header */}
            <div className="mb-3 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400">{t.terminalTitle}</span>
            </div>

            {/* Test results */}
            <div className="space-y-1 text-green-400">
              <div>{t.test1}</div>
              <div>{t.test2}</div>
              <div>{t.test3}</div>
              <div>{t.test4}</div>
              <div>{t.test5}</div>
              <div>{t.test6}</div>
              <div>{t.test7}</div>
              <div>{t.test8}</div>
              <div className="text-gray-300">...</div>
              <div>{t.test15}</div>
              <div className="text-gray-300">...</div>
              <div>{t.test23}</div>
              <div className="text-gray-300">...</div>
              <div>{t.test31}</div>
            </div>

            {/* Summary */}
            <div className="mt-4 border-t border-gray-700 pt-3">
              <div className="text-green-400">{t.allPassed}</div>
              <div className="text-gray-400">{t.summary}</div>
              <div className="text-gray-400">{t.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
