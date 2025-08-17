import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap } from "lucide-react";

export function ModelsSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">
        🤖 Модель имеет значение
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
          <h3 className="text-2xl font-bold text-gray-900">
            Топ-3 модели для Вайб-кодинга:
          </h3>

          <div className="space-y-4">
            {/* Claude 4.0 Sonnet */}
            <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-blue-800">
                      Claude 4.0 Sonnet
                    </h4>
                    <p className="text-sm text-gray-600">
                      Лучший баланс качества и скорости для большинства задач
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gemini */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="font-bold text-green-800">Gemini</h4>
                    <p className="text-sm text-gray-600">
                      Большой контекст для работы с объемными проектами
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* o1/Claude Opus */}
            <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <div>
                    <h4 className="font-bold text-purple-800">
                      o1 / Claude Opus 4.1
                    </h4>
                    <p className="text-sm text-gray-600">
                      Глубокое рассуждение для сложных архитектурных решений
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom tip */}
      <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-bold text-yellow-800">
            💡 Стратегия использования моделей
          </h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-100 text-red-800">
                Подготовка
              </Badge>
              <span>
                Используйте <strong>дорогие модели</strong> (o1, Claude Opus)
                для планирования и архитектуры
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Реализация
              </Badge>
              <span>
                Используйте <strong>быстрые модели</strong> (Claude Sonnet) для
                написания кода
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Экспериментируйте
              </Badge>
              <span>
                Найдите свои лучшие модели, которые соответствуют вашим
                потребностям и стилю работы
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
