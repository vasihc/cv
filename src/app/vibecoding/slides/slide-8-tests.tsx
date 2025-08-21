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
import { useState, useEffect } from "react";

export function TestsSlide() {
  const { language } = useLanguage();
  const [visibleTests, setVisibleTests] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  
  // Auto-run tests animation
  useEffect(() => {
    const startAnimation = () => {
      setVisibleTests(0);
      setProgress(0);
      setShowSummary(false);
      setIsRunning(true);
      
      // Animate test results appearing
      const testInterval = setInterval(() => {
        setVisibleTests(prev => {
          if (prev >= 11) {
            clearInterval(testInterval);
            setTimeout(() => {
              setShowSummary(true);
              setIsRunning(false);
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 200);
      
      // Animate progress bar
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 220);
    };
    
    // Start animation immediately
    startAnimation();
    
    // Restart animation every 8 seconds
    const restartInterval = setInterval(startAnimation, 8000);
    
    return () => {
      clearInterval(restartInterval);
    };
  }, []);

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

        {/* Right side - animated test results */}
        <div className="flex items-center justify-center">
          <div className="h-[28rem] w-full rounded-lg border border-gray-200 bg-gray-900 p-4 font-mono text-xs overflow-hidden relative">
            {/* Terminal header */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400">{t.terminalTitle}</span>
              </div>
              {isRunning && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 text-[10px]">Running...</span>
                </div>
              )}
            </div>

            {/* Command */}
            <div className="text-gray-400 mb-2">
              <span className="text-green-400">$</span> npm test
            </div>

            {/* Progress bar */}
            {isRunning && (
              <div className="mb-3 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Test results with animation */}
            <div className="space-y-1">
              {visibleTests >= 1 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test1}
                </div>
              )}
              {visibleTests >= 2 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test2}
                </div>
              )}
              {visibleTests >= 3 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test3}
                </div>
              )}
              {visibleTests >= 4 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test4}
                </div>
              )}
              {visibleTests >= 5 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test5}
                </div>
              )}
              {visibleTests >= 6 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test6}
                </div>
              )}
              {visibleTests >= 7 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test7}
                </div>
              )}
              {visibleTests >= 8 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test8}
                </div>
              )}
              {visibleTests >= 9 && <div className="text-gray-500">...</div>}
              {visibleTests >= 10 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test15}
                </div>
              )}
              {visibleTests >= 10 && <div className="text-gray-500">...</div>}
              {visibleTests >= 11 && (
                <div className="text-green-400 animate-fadeIn">
                  <span className="inline-block animate-bounce" style={{ animationDuration: '0.5s', animationIterationCount: '1' }}>✓</span> {t.test31}
                </div>
              )}
            </div>

            {/* Summary with animation */}
            {showSummary && (
              <div className="mt-4 border-t border-gray-700 pt-3 animate-fadeIn">
                <div className="text-green-400 font-bold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  {t.allPassed}
                </div>
                <div className="text-gray-400 mt-1">{t.summary}</div>
                <div className="text-gray-400 flex items-center gap-2">
                  <span>{t.time}</span>
                  <span className="text-green-400 text-[10px]">• Fast!</span>
                </div>
              </div>
            )}

            {/* Animated dots while running */}
            {isRunning && !showSummary && (
              <div className="absolute bottom-4 left-4 text-gray-400">
                <span className="animate-pulse">Running tests</span>
                <span className="inline-block ml-1">
                  <span className="animate-pulse" style={{ animationDelay: '0s' }}>.</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
