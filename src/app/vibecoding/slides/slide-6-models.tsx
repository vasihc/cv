import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function ModelsSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🤖 Модель имеет значение",
      subtitle: "Топ-3 модели для Вайб-кодинга:",
      claudeTitle: "Claude 4.0 Sonnet",
      claudeDesc: "Лучший баланс качества и скорости для большинства задач",
      geminiTitle: "Gemini",
      geminiDesc: "Большой контекст для работы с объемными проектами",
      opusTitle: "o1 / Claude Opus 4.1",
      opusDesc: "Глубокое рассуждение для сложных архитектурных решений",
      strategyTitle: "💡 Стратегия использования моделей",
      preparation: "Подготовка",
      preparationDesc:
        "Используйте дорогие модели (o1, Claude Opus) для планирования и архитектуры",
      implementation: "Реализация",
      implementationDesc:
        "Используйте быстрые модели (Claude Sonnet) для написания кода",
      experiment: "Экспериментируйте",
      experimentDesc:
        "Найдите свои лучшие модели, которые соответствуют вашим потребностям и стилю работы",
    },
    en: {
      title: "🤖 Model Matters",
      subtitle: "Top 3 models for Vibe Coding:",
      claudeTitle: "Claude 4.0 Sonnet",
      claudeDesc: "Best balance of quality and speed for most tasks",
      geminiTitle: "Gemini",
      geminiDesc: "Large context for working with voluminous projects",
      opusTitle: "o1 / Claude Opus 4.1",
      opusDesc: "Deep reasoning for complex architectural decisions",
      strategyTitle: "💡 Model Usage Strategy",
      preparation: "Preparation",
      preparationDesc:
        "Use expensive models (o1, Claude Opus) for planning and architecture",
      implementation: "Implementation",
      implementationDesc: "Use fast models (Claude Sonnet) for writing code",
      experiment: "Experiment",
      experimentDesc:
        "Find your best models that match your needs and work style",
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
        {/* Left side - Image */}
        <div className="flex items-center justify-center">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/vibecoding/models.jpg"
              alt="AI Models Comparison"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Models list */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t.subtitle}
          </h3>

          <div className="space-y-4">
            {/* Claude 4.0 Sonnet */}
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 dark:border-blue-700 dark:from-blue-900/20 dark:to-indigo-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-blue-800">{t.claudeTitle}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t.claudeDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gemini */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-bold text-green-800 dark:text-green-300">
                      {t.geminiTitle}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t.geminiDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* o1/Claude Opus */}
            <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50 dark:border-purple-700 dark:from-purple-900/20 dark:to-violet-900/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-bold text-purple-800 dark:text-purple-300">
                      {t.opusTitle}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t.opusDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom tip */}
      <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 dark:border-yellow-700 dark:from-yellow-900/20 dark:to-orange-900/20">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-bold text-yellow-800 dark:text-yellow-300">
            {t.strategyTitle}
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-100 text-red-800">
                {t.preparation}
              </Badge>
              <span>{t.preparationDesc}</span>
            </p>
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {t.implementation}
              </Badge>
              <span>{t.implementationDesc}</span>
            </p>
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                {t.experiment}
              </Badge>
              <span>{t.experimentDesc}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
