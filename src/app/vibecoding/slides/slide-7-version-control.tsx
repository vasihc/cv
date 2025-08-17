import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, RotateCcw, CheckCircle } from "lucide-react";

export function VersionControlSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">Version Control</h2>

      {/* Main principle */}
      <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-blue-600 p-2">
            <GitBranch className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-800">
            Основной принцип: всегда чистый Git
          </h3>
        </div>
        <p className="text-gray-700">
          Каждый пункт из нашего плана нужно реализовывать в новом чистом чате с
          чистым Git, чтобы в случае чего отревертить изменения.
        </p>
      </div>

      {/* Four key points */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Point 1 */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-green-600 p-2">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-green-800">
                1. Ешь слона по частям
              </h4>
            </div>
            <p className="text-sm text-gray-700">
              Разбивайте большие задачи на маленькие подзадачи. Каждая подзадача
              = отдельный коммит.
            </p>
          </CardContent>
        </Card>

        {/* Point 2 */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-600 p-2">
                <GitBranch className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-800">
                2. Чистый Git + чистый чат
              </h4>
            </div>
            <p className="text-sm text-gray-700">
              На каждую подзадачу - новый чистый чат и чистый Git. Никаких
              незакоммиченных изменений.
            </p>
          </CardContent>
        </Card>

        {/* Point 3 */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-red-600 p-2">
                <RotateCcw className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-red-800">3. Git reset --hard</h4>
            </div>
            <p className="text-sm text-gray-700">
              Если что-то пошло не туда - используйте git reset --hard и
              начинайте заново с чистого состояния.
            </p>
          </CardContent>
        </Card>

        {/* Point 4 */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-purple-600 p-2">
                <RotateCcw className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-800">
                4. Новый чат при проблемах
              </h4>
            </div>
            <p className="text-sm text-gray-700">
              Если фича пошла не туда - начинайте новый чат. AI накапливает
              плохой код слой за слоем в одном чате.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
