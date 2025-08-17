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

export function TestsSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">🧪 Тесты</h2>

      {/* Main content with image */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* LLM Regression Problem */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-600 p-2">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-red-800">⚠️ Проблема</h4>
              </div>
              <p className="text-sm text-gray-700">
                LLM часто вносит ненужные изменения в другие части проекта. Один
                фикс → ломается что-то ещё.
              </p>
            </CardContent>
          </Card>

          {/* Test Solution */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800">✅ Решение</h4>
              </div>
              <p className="text-sm text-gray-700">
                Интеграционные тесты ловят регрессии и задают &ldquo;жёсткие
                правила&rdquo; для модели.
              </p>
            </CardContent>
          </Card>

          {/* Practice */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800">✍️ Практика</h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  • Начните с написания тестов вручную (ручной каркас → AI
                  дополняет).
                </li>
                <li>• После каждой новой фичи: тесты → проверка → commit.</li>
              </ul>
            </CardContent>
          </Card>

          {/* High-level Tests */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <TestTube className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800">
                  🔗 Высокоуровневые тесты
                </h4>
              </div>
              <p className="text-sm text-gray-700">
                Фокус на end-to-end сценариях, имитирующих реальные действия
                пользователя.
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
              <span className="text-gray-400">Terminal - npm test</span>
            </div>

            {/* Test results */}
            <div className="space-y-1 text-green-400">
              <div>✓ Test 1: User auth</div>
              <div>✓ Test 2: Form validation</div>
              <div>✓ Test 3: API integration</div>
              <div>✓ Test 4: Database ops</div>
              <div>✓ Test 5: UI components</div>
              <div>✓ Test 6: Error handling</div>
              <div>✓ Test 7: Performance</div>
              <div>✓ Test 8: Security</div>
              <div className="text-gray-300">...</div>
              <div>✓ Test 15: E2E flow</div>
              <div className="text-gray-300">...</div>
              <div>✓ Test 23: Integration</div>
              <div className="text-gray-300">...</div>
              <div>✓ Test 31: Unit tests</div>
            </div>

            {/* Summary */}
            <div className="mt-4 border-t border-gray-700 pt-3">
              <div className="text-green-400">✓ All tests passed</div>
              <div className="text-gray-400">Tests: 31 passed, 0 failed</div>
              <div className="text-gray-400">Time: 2.4s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
