import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export function AdvancedSlide() {
  const { language } = useLanguage();
  const [isThinking, setIsThinking] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  // Animate thinking state
  useEffect(() => {
    const interval = setInterval(() => {
      setIsThinking(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  // Cursor blinking animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Typing animation
  useEffect(() => {
    const fullText = "Analyzing codebase structure...";
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, []);

  const content = {
    ru: {
      title: "⚡ Claude Code на максималках",
      techniquesTitle: "🎯 Основные приёмы работы",
      planMode: "• Plan Mode (Shift+Tab) → план перед выполнением",
      claudeMd: "• claude.md (/init) → память и правила проекта",
      gitCheckpoints: "• Git как чекпоинты → часто коммитить",
      screenshots: "• Скриншоты/изображения в чат → для багов, дизайнов",
      externalFolders:
        "• Папки сторонних проектов → контекст других кодовых баз",
      webSearch: "• URL/веб-поиск → браузер для документации",
      subAgents:
        "• Sub-agents → параллельные процессы (10 агентов для портирования)",
      resultCheck: "• Проверка результата → edge cases, код-ревью как PR",
      advantagesTitle: "🚀 Преимущества Claude Code",
      advantage1: "• Уверенно справляется где Cursor «ломается»",
      advantage2:
        "• Работает с дополнительным контекстом (папки, доки, скриншоты)",
      advantage3: "• Sub-agents и параллельные процессы",
      advantage4: "• Отличные пошаговые планы перед выполнением",
      advantage5: "• Быстрее и надёжнее в сложных сценариях",
      advantage6: "• SSH доступ к серверам → автоустановка на Linux",
      advantage7: "• Автодеплой через CI/CD, настройка инфраструктуры",
      cursorTitle: "🧷 Когда остаться в Cursor",
      cursorPoint1: "• PR-поток, Bug Bot, SAST/CI-перила",
      cursorPoint2: "• Дисциплина «малых диффов»",
      cursorPoint3: "• Хобби и новички → дешевле и удобнее для простых задач",
      disadvantagesTitle: "⚠️ Недостатки",
      disadvantage1: "• Цена: $200/мес для реального использования",
      disadvantage2: "• $20 → 10 мин работы, $100 → 1 час",
      disadvantage3: "• Нет чекпоинтов, только Git",
      disadvantage4: "• Медленно: задачи по 30+ минут, мешает флоу",
      disadvantage5: "• Непредсказуемо дорого в API (неделя = $3000 токенов)",
      disadvantage6: "• SSH доступ требует настройки безопасности",
    },
    en: {
      title: "⚡ Claude Code at Maximum",
      techniquesTitle: "🎯 Main Working Techniques",
      planMode: "• Plan Mode (Shift+Tab) → plan before execution",
      claudeMd: "• claude.md (/init) → memory and project rules",
      gitCheckpoints: "• Git as checkpoints → commit frequently",
      screenshots: "• Screenshots/images in chat → for bugs, designs",
      externalFolders:
        "• External project folders → context of other codebases",
      webSearch: "• URL/web search → browser for documentation",
      subAgents: "• Sub-agents → parallel processes (10 agents for porting)",
      resultCheck: "• Result verification → edge cases, code review as PR",
      advantagesTitle: "🚀 Claude Code Advantages",
      advantage1: "• Confidently handles where Cursor 'breaks'",
      advantage2:
        "• Works with additional context (folders, docs, screenshots)",
      advantage3: "• Sub-agents and parallel processes",
      advantage4: "• Excellent step-by-step plans before execution",
      advantage5: "• Faster and more reliable in complex scenarios",
      advantage6: "• SSH access to servers → auto-installation on Linux",
      advantage7: "• Auto-deploy via CI/CD, infrastructure setup",
      cursorTitle: "🧷 When to Stay in Cursor",
      cursorPoint1: "• PR flow, Bug Bot, SAST/CI guardrails",
      cursorPoint2: "• Discipline of 'small diffs'",
      cursorPoint3:
        "• Hobby and beginners → cheaper and more convenient for simple tasks",
      disadvantagesTitle: "⚠️ Disadvantages",
      disadvantage1: "• Price: $200/month for real usage",
      disadvantage2: "• $20 → 10 min work, $100 → 1 hour",
      disadvantage3: "• No checkpoints, only Git",
      disadvantage4: "• Slow: tasks take 30+ minutes, interferes with flow",
      disadvantage5: "• Unpredictably expensive in API (week = $3000 tokens)",
      disadvantage6: "• SSH access requires security setup",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          {t.title}
        </h2>
      </div>

      {/* Two-column layout on desktop, stacked on mobile */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7">
        {/* Left column - 60% on desktop, full width on mobile */}
        <div className="w-full md:flex-1 space-y-3 md:space-y-4">
          {/* Key techniques */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardContent className="p-3 md:p-4">
              <h4 className="mb-2 font-bold text-blue-800 dark:text-blue-300">
                {t.techniquesTitle}
              </h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li>{t.planMode}</li>
                <li>{t.claudeMd}</li>
                <li>{t.gitCheckpoints}</li>
                <li>{t.screenshots}</li>
                <li>{t.externalFolders}</li>
                <li>{t.webSearch}</li>
                <li>{t.subAgents}</li>
                <li>{t.resultCheck}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardContent className="p-3 md:p-4">
              <h4 className="mb-2 font-bold text-green-800 dark:text-green-300">
                {t.advantagesTitle}
              </h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li>{t.advantage1}</li>
                <li>{t.advantage2}</li>
                <li>{t.advantage3}</li>
                <li>{t.advantage4}</li>
                <li>{t.advantage5}</li>
                <li>{t.advantage6}</li>
                <li>{t.advantage7}</li>
              </ul>
            </CardContent>
          </Card>

          {/* When to stay in Cursor */}
          <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 dark:border-yellow-700 dark:from-yellow-900/20 dark:to-orange-900/20">
            <CardContent className="p-3 md:p-4">
              <h4 className="mb-2 font-bold text-yellow-800 dark:text-yellow-300">
                {t.cursorTitle}
              </h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li>{t.cursorPoint1}</li>
                <li>{t.cursorPoint2}</li>
                <li>{t.cursorPoint3}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Risks/minuses */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50 dark:border-red-700 dark:from-red-900/20 dark:to-pink-900/20">
            <CardContent className="p-3 md:p-4">
              <h4 className="mb-2 font-bold text-red-800 dark:text-red-300">
                {t.disadvantagesTitle}
              </h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                <li>{t.disadvantage1}</li>
                <li>{t.disadvantage2}</li>
                <li>{t.disadvantage3}</li>
                <li>{t.disadvantage4}</li>
                <li>{t.disadvantage5}</li>
                <li>{t.disadvantage6}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right column - 40% on desktop, full width on mobile - Claude Code Terminal */}
        <div className="w-full md:max-w-[40%] md:flex-1">
          <style jsx>{`
            @keyframes blink {
              0%, 50% { opacity: 1; }
              51%, 100% { opacity: 0; }
            }
            @keyframes typewriter {
              from { width: 0; }
              to { width: 100%; }
            }
            @keyframes pulse-dot {
              0%, 60%, 100% { opacity: 0.3; }
              30% { opacity: 1; }
            }
          `}</style>
          <div className="rounded-lg bg-gray-900 p-2 md:p-3 shadow-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="mb-2 md:mb-3 flex items-center justify-between border-b border-gray-700 pb-1 md:pb-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-[10px] md:text-xs text-gray-400">claude-code</span>
              </div>
              <span className="text-[10px] md:text-xs text-gray-500">bash</span>
            </div>
            
            {/* Terminal Content */}
            <div className="space-y-1 md:space-y-2 font-mono text-[10px] md:text-xs">
              <div className="text-gray-400">
                <span className="text-green-400">$</span> <span className="text-white">claude-code</span>
              </div>
              
              <div className="text-blue-400">
                Claude Code v1.0.0 - AI Coding Assistant
              </div>
              
              <div className="text-gray-300 transition-all duration-300 hover:text-gray-100">
                <span className="text-yellow-400 animate-pulse">→</span> Initializing workspace...
              </div>
              
              <div className="text-gray-300 transition-all duration-300">
                <span className="text-green-400 inline-block animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>✓</span> Connected to Claude API
              </div>
              
              <div className="text-gray-300 transition-all duration-300">
                <span className="text-green-400 inline-block animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>✓</span> Git repository detected
              </div>
              
              <div className="text-gray-300 transition-all duration-300">
                <span className="text-green-400 inline-block animate-bounce" style={{ animationDuration: '2s', animationDelay: '1.5s' }}>✓</span> Loaded project context
              </div>
              
              <div className="mt-3 border-t border-gray-700 pt-2">
                <div className="text-cyan-400">
                  Ready to assist with your code!
                </div>
              </div>
              
              {/* Thinking animation with Claude logo */}
              {isThinking ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {/* Animated Claude logo */}
                    <div className="relative">
                      <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
                      <div className="absolute inset-0 h-4 w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-ping opacity-30"></div>
                    </div>
                    <span className="ml-2 text-purple-400 text-[10px] md:text-xs">Claude is thinking</span>
                    <span className="ml-1 text-purple-300">
                      <span className="animate-pulse">.</span>
                      <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                      <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Typing animation */}
                  <div className="text-gray-300 mb-1">
                    <span className="text-purple-400">→</span> {typedText}
                    {typedText.length < 32 && <span className="text-white opacity-70">|</span>}
                  </div>
                  
                  {/* Command prompt with blinking cursor */}
                  <div className="text-gray-400">
                    <span className="text-green-400">claude</span> <span className="text-gray-500">›</span> 
                    <span className={`text-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>▌</span>
                  </div>
                </div>
              )}
              
              <div className="mt-2 rounded bg-gray-800 p-1.5 md:p-2">
                <div className="text-gray-400 text-[9px] md:text-[10px]">
                  <div>Available commands:</div>
                  <div className="mt-1 text-gray-500">
                    <div>• /init - Initialize project memory</div>
                    <div>• /plan - Enter planning mode</div>
                    <div>• /task - Launch sub-agent</div>
                    <div>• /git - Manage version control</div>
                    <div>• /deploy - Deploy to production</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 text-[9px] md:text-[10px] text-gray-600">
                Mode: Interactive | Model: Claude 3 Opus | Context: 200k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
