import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";

export function AdvancedSlide() {
  const { language } = useLanguage();

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
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-4xl font-bold">{t.title}</h2>
      </div>

      {/* Two-column layout */}
      <div className="flex items-start gap-7">
        {/* Left column - 60% */}
        <div className="flex-1 space-y-4">
          {/* Key techniques */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-blue-800">
                {t.techniquesTitle}
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
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
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-green-800">
                {t.advantagesTitle}
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
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
          <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-yellow-800">
                {t.cursorTitle}
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>{t.cursorPoint1}</li>
                <li>{t.cursorPoint2}</li>
                <li>{t.cursorPoint3}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Risks/minuses */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-red-800">
                {t.disadvantagesTitle}
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
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

        {/* Right column - 40% */}
        <div className="max-w-[40%] flex-1">
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <img
              src="/vibecoding/claude-code.png"
              alt="Claude Code Terminal Interface"
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
