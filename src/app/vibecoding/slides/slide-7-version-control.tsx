import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, RotateCcw, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function VersionControlSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "📝 Version Control",
      principleTitle: "Основной принцип: всегда чистый Git",
      principleDesc:
        "Каждый пункт из нашего плана нужно реализовывать в новом чистом чате с чистым Git, чтобы в случае чего отревертить изменения.",
      point1Title: "1. Ешь слона по частям",
      point1Desc:
        "Разбивайте большие задачи на маленькие подзадачи. Каждая подзадача = отдельный коммит.",
      point2Title: "2. Чистый Git + чистый чат",
      point2Desc:
        "На каждую подзадачу - новый чистый чат и чистый Git. Никаких незакоммиченных изменений.",
      point3Title: "3. Git reset --hard",
      point3Desc:
        "Если что-то пошло не туда - используйте git reset --hard и начинайте заново с чистого состояния.",
      point4Title: "4. Новый чат при проблемах",
      point4Desc:
        "Если фича пошла не туда - начинайте новый чат. AI накапливает плохой код слой за слоем в одном чате.",
    },
    en: {
      title: "📝 Version Control",
      principleTitle: "Main principle: always clean Git",
      principleDesc:
        "Each item from our plan should be implemented in a new clean chat with clean Git, so we can revert changes if needed.",
      point1Title: "1. Eat the elephant in parts",
      point1Desc:
        "Break down large tasks into small subtasks. Each subtask = separate commit.",
      point2Title: "2. Clean Git + clean chat",
      point2Desc:
        "For each subtask - new clean chat and clean Git. No uncommitted changes.",
      point3Title: "3. Git reset --hard",
      point3Desc:
        "If something goes wrong - use git reset --hard and start over from a clean state.",
      point4Title: "4. New chat for problems",
      point4Desc:
        "If a feature goes wrong - start a new chat. AI accumulates bad code layer by layer in one chat.",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">{t.title}</h2>

      {/* Main principle */}
      <div className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-blue-600 p-2">
            <GitBranch className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-blue-800">
            {t.principleTitle}
          </h3>
        </div>
        <p className="text-gray-700">{t.principleDesc}</p>
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
              <h4 className="font-bold text-green-800">{t.point1Title}</h4>
            </div>
            <p className="text-sm text-gray-700">{t.point1Desc}</p>
          </CardContent>
        </Card>

        {/* Point 2 */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-blue-600 p-2">
                <GitBranch className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-800">{t.point2Title}</h4>
            </div>
            <p className="text-sm text-gray-700">{t.point2Desc}</p>
          </CardContent>
        </Card>

        {/* Point 3 */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-red-600 p-2">
                <RotateCcw className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-red-800">{t.point3Title}</h4>
            </div>
            <p className="text-sm text-gray-700">{t.point3Desc}</p>
          </CardContent>
        </Card>

        {/* Point 4 */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-purple-600 p-2">
                <RotateCcw className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-800">{t.point4Title}</h4>
            </div>
            <p className="text-sm text-gray-700">{t.point4Desc}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
