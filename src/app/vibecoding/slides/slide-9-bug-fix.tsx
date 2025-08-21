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
  Package,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export function BugFixSlide() {
  const { language } = useLanguage();
  const [showError, setShowError] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showFix, setShowFix] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [highlightLine, setHighlightLine] = useState(-1);
  
  // Animation sequence
  useEffect(() => {
    const runAnimation = () => {
      // Reset state
      setShowError(false);
      setIsAnalyzing(false);
      setShowFix(false);
      setTypedCode("");
      setHighlightLine(-1);
      
      // Step 1: Show error
      setTimeout(() => setShowError(true), 500);
      
      // Step 2: Start analyzing
      setTimeout(() => setIsAnalyzing(true), 2000);
      
      // Step 3: Show fix with typing animation
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowFix(true);
        
        // Type the fix code
        const fixCode = `function processData(data) {
  if (!data || !data.x) {
    return null;
  }
  return data.x;
}`;
        let index = 0;
        const typeInterval = setInterval(() => {
          if (index <= fixCode.length) {
            setTypedCode(fixCode.slice(0, index));
            index += 2;
          } else {
            clearInterval(typeInterval);
            // Highlight the fix line
            setTimeout(() => setHighlightLine(2), 500);
          }
        }, 30);
      }, 4000);
    };
    
    // Run animation initially
    runAnimation();
    
    // Restart animation every 10 seconds
    const restartInterval = setInterval(runAnimation, 10000);
    
    return () => clearInterval(restartInterval);
  }, []);

  const content = {
    ru: {
      title: "🐞 Bug Fixes",
      mainIdeaTitle: "🎯 Основная идея",
      mainIdeaDesc:
        "Первый шаг при баге — скопировать сообщение об ошибке и вставить его в LLM. Часто этого достаточно, чтобы AI сам нашёл и исправил проблему.",
      problemTitle: "⚠️ Проблема",
      problemDesc:
        "LLM при повторных фиксах может «наращивать слои мусорного кода» и усложнять проект.",
      practiceTitle: "🔑 Практика и советы",
      practicePoint1: "• Копипаст ошибки → AI сам понимает причину",
      practicePoint2: "• Reset перед каждой новой попыткой (git reset)",
      practicePoint3: "• Многоуровневое мышление: сначала причины, потом код",
      practicePoint4: "• Логирование помогает точнее диагностировать",
      practicePoint5: "• Смена модели (Claude, OpenAI, Gemini)",
      practicePoint6: "• Точный фикс на чистой базе",
      practicePoint7:
        "• «Всегда уточняй версию библиотеки при багах», т.к. фикс для v3 ≠ фикс для v4",
      bugBotTitle: "🤖 Bug Bot (Cursor)",
      bugBotDesc:
        "Bug Bot от Cursor запускается при создании pull request и делает review. Иногда находит действительно важные баги, но иногда докапывается до мелочей. В целом полезно.",
      terminalTitle: "Terminal - npm start",
      errorMessage: "Error: Cannot read property 'x' of undefined",
      errorLocation1: " at processData (app.js:15:23)",
      errorLocation2: " at handleSubmit (app.js:8:12)",
      errorLocation3: " at HTMLFormElement.onsubmit",
      bugBotLabel: "Bug Bot",
      fixComment: "// Fix: Add null check before accessing property",
      functionStart: "function processData(data) {",
      nullCheck: " if (!data || !data.x) {",
      returnNull: " return null;",
      closingBrace1: " }",
      returnData: " return data.x;",
      closingBrace2: "}",
    },
    en: {
      title: "🐞 Bug Fixes",
      mainIdeaTitle: "🎯 Main Idea",
      mainIdeaDesc:
        "The first step when encountering a bug is to copy the error message and paste it into the LLM. Often this is enough for AI to find and fix the problem itself.",
      problemTitle: "⚠️ Problem",
      problemDesc:
        "LLM during repeated fixes can 'accumulate layers of garbage code' and complicate the project.",
      practiceTitle: "🔑 Practice and Tips",
      practicePoint1: "• Copy-paste error → AI understands the cause itself",
      practicePoint2: "• Reset before each new attempt (git reset)",
      practicePoint3: "• Multi-level thinking: first causes, then code",
      practicePoint4: "• Logging helps diagnose more accurately",
      practicePoint5: "• Switch models (Claude, OpenAI, Gemini)",
      practicePoint6: "• Precise fix on clean base",
      practicePoint7:
        "• 'Always specify library version for bugs', because fix for v3 ≠ fix for v4",
      bugBotTitle: "🤖 Bug Bot (Cursor)",
      bugBotDesc:
        "Bug Bot from Cursor runs when creating a pull request and does review. Sometimes finds really important bugs, but sometimes digs into details. Generally useful.",
      terminalTitle: "Terminal - npm start",
      errorMessage: "Error: Cannot read property 'x' of undefined",
      errorLocation1: " at processData (app.js:15:23)",
      errorLocation2: " at handleSubmit (app.js:8:12)",
      errorLocation3: " at HTMLFormElement.onsubmit",
      bugBotLabel: "Bug Bot",
      fixComment: "// Fix: Add null check before accessing property",
      functionStart: "function processData(data) {",
      nullCheck: " if (!data || !data.x) {",
      returnNull: " return null;",
      closingBrace1: " }",
      returnData: " return data.x;",
      closingBrace2: "}",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        {t.title}
      </h2>

      {/* Main content with code block */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left side - main content */}
        <div className="space-y-6">
          {/* Main idea */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-600 p-2">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-green-800 dark:text-green-300">
                  {t.mainIdeaTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.mainIdeaDesc}
              </p>
            </CardContent>
          </Card>

          {/* Problem */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50 dark:border-red-700 dark:from-red-900/20 dark:to-pink-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-600 p-2">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-red-800 dark:text-red-300">
                  {t.problemTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.problemDesc}
              </p>
            </CardContent>
          </Card>

          {/* Practice and tips */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-blue-600 p-2">
                  <Lightbulb className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-blue-800 dark:text-blue-300">
                  {t.practiceTitle}
                </h4>
              </div>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  • <Copy className="inline h-3 w-3" /> {t.practicePoint1}
                </li>
                <li>
                  • <RotateCcw className="inline h-3 w-3" /> {t.practicePoint2}
                </li>
                <li>
                  • <Layers className="inline h-3 w-3" /> {t.practicePoint3}
                </li>
                <li>
                  • <FileText className="inline h-3 w-3" /> {t.practicePoint4}
                </li>
                <li>
                  • <Zap className="inline h-3 w-3" /> {t.practicePoint5}
                </li>
                <li>
                  • <Wrench className="inline h-3 w-3" /> {t.practicePoint6}
                </li>
                <li>
                  • <Package className="inline h-3 w-3" /> {t.practicePoint7}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Bug Bot */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 dark:border-purple-700 dark:from-purple-900/20 dark:to-violet-900/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-600 p-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-bold text-purple-800 dark:text-purple-300">
                  {t.bugBotTitle}
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {t.bugBotDesc}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right side - animated terminal */}
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
              {showError && !isAnalyzing && !showFix && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-red-400 text-[10px]">Error</span>
                </div>
              )}
            </div>

            {/* Command */}
            <div className="text-gray-400 mb-3">
              <span className="text-green-400">$</span> npm start
            </div>

            {/* Error message with animation */}
            {showError && (
              <div className="space-y-2 animate-fadeIn">
                <div className="text-red-400">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 animate-pulse">✗</span>
                    <div>
                      <div>{t.errorMessage}</div>
                      <div className="text-gray-500 text-[10px] mt-1">{t.errorLocation1}</div>
                      <div className="text-gray-500 text-[10px]">{t.errorLocation2}</div>
                      <div className="text-gray-500 text-[10px]">{t.errorLocation3}</div>
                    </div>
                  </div>
                </div>

                {/* Analyzing animation */}
                {isAnalyzing && (
                  <div className="mt-4 p-3 rounded border border-yellow-600/50 bg-yellow-900/20 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-spin"></div>
                        <div className="absolute inset-0 h-5 w-5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-ping opacity-30"></div>
                      </div>
                      <span className="text-yellow-400 text-sm">AI analyzing error</span>
                      <span className="text-yellow-300">
                        <span className="animate-pulse">.</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                      </span>
                    </div>
                    <div className="mt-2 text-[10px] text-yellow-300/70">
                      Scanning stack trace • Identifying root cause • Generating fix
                    </div>
                  </div>
                )}

                {/* AI suggestion with typing animation */}
                {showFix && (
                  <div className="mt-4 rounded border border-green-600 bg-green-900/20 p-3 animate-fadeIn">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="relative">
                        <span className="text-lg">🤖</span>
                        <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                      </div>
                      <span className="font-semibold text-green-400">
                        {t.bugBotLabel}
                      </span>
                      <Badge className="ml-auto bg-green-600/20 text-green-400 text-[10px] border-green-600">
                        Fix Ready
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-green-300 mb-2">
                      <div className="text-green-400 mb-2">✓ {t.fixComment}</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded p-2 text-[11px]">
                      <pre className="text-gray-300">
                        <code>{typedCode}</code>
                        {typedCode.length > 0 && typedCode.length < 80 && (
                          <span className="text-white opacity-70 animate-pulse">|</span>
                        )}
                      </pre>
                      {highlightLine === 2 && (
                        <div className="absolute left-0 right-0 h-5 bg-green-400/10 animate-pulse" 
                             style={{ top: '260px' }}>
                          <div className="absolute left-2 text-green-400 text-[10px]">
                            ← Added null check
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {typedCode.length >= 80 && (
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-green-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                        Fix applied successfully
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
