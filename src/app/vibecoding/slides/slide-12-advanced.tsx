import { Card, CardContent } from "@/components/ui/card";

export function AdvancedSlide() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-2 text-4xl font-bold">Claude Code на максималках</h2>
      </div>

      {/* Two-column layout */}
      <div className="flex items-start gap-7">
        {/* Left column - 60% */}
        <div className="flex-1 space-y-4">
          {/* Why switch from Cursor */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-purple-800">
                🔄 Почему перешли с Cursor
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Работает в терминале, не как редактор с AI</li>
                <li>• Решает сложные задачи лучше Cursor на любых моделях</li>
                <li>
                  • iOS drag-and-drop анимации → Cursor не справился, Claude за
                  30 мин
                </li>
                <li>
                  • Google Calendar интеграция → Cursor ломался, Claude за час
                </li>
                <li>
                  • iOS→Android портирование → Cursor буксовал, Claude быстро
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Key techniques */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-blue-800">
                🎯 Основные приёмы работы
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Plan Mode (Shift+Tab) → план перед выполнением</li>
                <li>• claude.md (/init) → память и правила проекта</li>
                <li>• Git как чекпоинты → часто коммитить</li>
                <li>• Скриншоты/изображения в чат → для багов, дизайнов</li>
                <li>
                  • Папки сторонних проектов → контекст других кодовых баз
                </li>
                <li>• URL/веб-поиск → браузер для документации</li>
                <li>
                  • Sub-agents → параллельные процессы (10 агентов для
                  портирования)
                </li>
                <li>• Проверка результата → edge cases, код-ревью как PR</li>
              </ul>
            </CardContent>
          </Card>

          {/* Advantages */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-green-800">
                🚀 Преимущества Claude Code
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Уверенно справляется где Cursor «ломается»</li>
                <li>
                  • Работает с дополнительным контекстом (папки, доки,
                  скриншоты)
                </li>
                <li>• Sub-agents и параллельные процессы</li>
                <li>• Отличные пошаговые планы перед выполнением</li>
                <li>• Быстрее и надёжнее в сложных сценариях</li>
                <li>• SSH доступ к серверам → автоустановка на Linux</li>
                <li>• Автодеплой через CI/CD, настройка инфраструктуры</li>
              </ul>
            </CardContent>
          </Card>

          {/* When to stay in Cursor */}
          <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-yellow-800">
                🧷 Когда остаться в Cursor
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• PR-поток, Bug Bot, SAST/CI-перила</li>
                <li>• Дисциплина «малых диффов»</li>
                <li>• Хобби и новички → дешевле и удобнее для простых задач</li>
              </ul>
            </CardContent>
          </Card>

          {/* Risks/minuses */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-bold text-red-800">⚠️ Недостатки</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Цена: $200/мес для реального использования</li>
                <li>• $20 → 10 мин работы, $100 → 1 час</li>
                <li>• Нет чекпоинтов, только Git</li>
                <li>• Медленно: задачи по 30+ минут, мешает флоу</li>
                <li>• Непредсказуемо дорого в API (неделя = $3000 токенов)</li>
                <li>• SSH доступ требует настройки безопасности</li>
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
            <div className="mt-4 rounded-lg border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-4">
              <h3 className="mb-2 text-xl font-bold text-indigo-800">
                Max ≈ $200/мес → почти безлимит
              </h3>
              <p className="text-sm text-gray-700">
                Окупается при продукте/экономии часов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
