import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Code, Mic, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";

export function ApproachSlide() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const userRule1 = `# Communication Protocol - Respond directly.
No unnecessary affirmations or filler phrases. - Use concise language. Aim for Cormac McCarthy's style. - Avoid apologies or excessive politeness. - Get to the point quickly. - Offer elaboration only if explicitly requested. -
Maintain factual accuracy and helpfulness while being brief. - Use short sentences and paragraphs. - Eliminate redundant words. -
Prefer active voice over passive. - Use contractions when appropriate. Example tone:
"The sky darkened. Rain fell. The man walked on." Adjust this protocol as needed based on user feedback. If you're unsure whether an answer is accurate, say so.`;

  const userRule2 = `Do not make any changes, until you have 95% confidence that you know what to build ask me follow up questions until you have that confidence`;

  const copyToClipboard = async (
    text: string,
    setter: (value: boolean) => void,
  ) => {
    try {
      // Fallback for older browsers
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setter(true);
      setTimeout(() => setter(false), 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Still show success to user even if console logging fails
      setter(true);
      setTimeout(() => setter(false), 3000);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">
        Инструменты разработки
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Side - Cursor IDE */}
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Cursor IDE
            </h3>
            <a
              href="https://cursor.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              cursor.com →
            </a>
          </div>

          {/* Project Rules Setup */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">
                  Настройка правил проекта
                </h4>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                Создайте файлы с правилами проекта для Cursor:
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-mono">./docs/rules-checklist.md</span>
                  <span>- правила проекта</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-mono">
                    .cursor/rules/project-rules.md
                  </span>
                  <span>- Rules: [Rules](./docs/rules-checklist.md)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Wispr Flow */}
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Wispr Flow
            </h3>
            <a
              href="https://wisprflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-purple-600 hover:text-purple-800 hover:underline"
            >
              wisprflow.ai →
            </a>
          </div>

          {/* Cursor Integration */}
          <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Mic className="h-6 w-6 text-cyan-600" />
                <h4 className="font-bold text-cyan-800">Голос в текст</h4>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                <strong>Особенность:</strong> При упоминании названия файла,
                Wispr Flow автоматически добавляет его в контекст чата Cursor.
              </p>
              <div className="rounded bg-gray-900 p-3 font-mono text-sm text-green-400">
                <div className="text-gray-400">{`// Пример использования`}</div>
                <div className="mt-2 text-green-400">
                  &quot;Создай компонент в файле Button.tsx&quot;
                </div>
                <div className="mt-2 text-gray-400">{`// Файл автоматически добавляется в контекст`}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Rules Section */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Мои User Rules</h3>

        {/* Rule 1 */}
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-orange-800">
                Communication Protocol
              </h4>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyToClipboard(userRule1, setCopied1);
                }}
                className="relative z-50 flex cursor-pointer items-center gap-2 rounded bg-orange-600 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-orange-700 hover:shadow-md active:scale-95"
                type="button"
              >
                {copied1 ? (
                  <>
                    <Check className="h-3 w-3" />
                    <span>Скопировано!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Копировать</span>
                  </>
                )}
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-h-32 overflow-y-auto rounded bg-gray-900 p-4 font-mono text-sm text-green-400">
              <pre className="whitespace-pre-wrap">{userRule1}</pre>
            </div>
          </CardContent>
        </Card>

        {/* Rule 2 */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-red-800">Confidence Rule</h4>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyToClipboard(userRule2, setCopied2);
                }}
                className="relative z-50 flex cursor-pointer items-center gap-2 rounded bg-red-600 px-3 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-red-700 hover:shadow-md active:scale-95"
                type="button"
              >
                {copied2 ? (
                  <>
                    <Check className="h-3 w-3" />
                    <span>Скопировано!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Копировать</span>
                  </>
                )}
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded bg-gray-900 p-4 font-mono text-sm text-green-400">
              <pre className="whitespace-pre-wrap">{userRule2}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
