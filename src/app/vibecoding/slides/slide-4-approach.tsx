import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Code, Mic, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function ApproachSlide() {
  const { language } = useLanguage();
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const content = {
    ru: {
      title: "🛠️ Инструменты разработки",
      cursorTitle: "Cursor IDE",
      cursorUrl: "cursor.com →",
      projectRulesTitle: "Настройка правил проекта",
      projectRulesDesc: "Создайте файлы с правилами проекта для Cursor:",
      rulesFile1: "./docs/rules-checklist.md",
      rulesFile1Desc: "- правила проекта",
      rulesFile2: ".cursor/rules/project-rules.md",
      rulesFile2Desc: "- Rules: [Rules](./docs/rules-checklist.md)",
      rulesResourcesTitle: "Полезные ресурсы:",
      rulesResourcesDesc: "Найдите готовые правила для вашего стека:",
      wisprTitle: "Wispr Flow",
      wisprUrl: "wisprflow.ai →",
      voiceTitle: "Голос в текст",
      voiceFeature: "Особенность:",
      voiceDesc:
        "При упоминании названия файла, Wispr Flow автоматически добавляет его в контекст чата Cursor.",
      voiceExample: "// Пример использования",
      voiceExampleText: '"Создай компонент в файле Button.tsx"',
      voiceAutoAdd: "// Файл автоматически добавляется в контекст",
      userRulesTitle: "Мои User Rules",
      communicationTitle: "Communication Protocol",
      confidenceTitle: "Confidence Rule",
      copyButton: "Копировать",
      copiedButton: "Скопировано!",
    },
    en: {
      title: "🛠️ Development Tools",
      cursorTitle: "Cursor IDE",
      cursorUrl: "cursor.com →",
      projectRulesTitle: "Project Rules Setup",
      projectRulesDesc: "Create project rule files for Cursor:",
      rulesFile1: "./docs/rules-checklist.md",
      rulesFile1Desc: "- project rules",
      rulesFile2: ".cursor/rules/project-rules.md",
      rulesFile2Desc: "- Rules: [Rules](./docs/rules-checklist.md)",
      rulesResourcesTitle: "Useful Resources:",
      rulesResourcesDesc: "Find curated rules for your stack:",
      wisprTitle: "Wispr Flow",
      wisprUrl: "wisprflow.ai →",
      voiceTitle: "Voice to Text",
      voiceFeature: "Feature:",
      voiceDesc:
        "When mentioning a file name, Wispr Flow automatically adds it to the Cursor chat context.",
      voiceExample: "// Usage example",
      voiceExampleText: '"Create component in Button.tsx file"',
      voiceAutoAdd: "// File automatically added to context",
      userRulesTitle: "My User Rules",
      communicationTitle: "Communication Protocol",
      confidenceTitle: "Confidence Rule",
      copyButton: "Copy",
      copiedButton: "Copied!",
    },
  };

  const t = content[language];

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
      <h2 className="mb-6 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Side - Cursor IDE */}
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t.cursorTitle}
            </h3>
            <a
              href="https://cursor.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              {t.cursorUrl}
            </a>
          </div>

          {/* Project Rules Setup */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg dark:border-green-700 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800 dark:text-green-300">
                  {t.projectRulesTitle}
                </h4>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {t.projectRulesDesc}
              </p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-mono">{t.rulesFile1}</span>
                  <span>{t.rulesFile1Desc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="font-mono">{t.rulesFile2}</span>
                  <span>{t.rulesFile2Desc}</span>
                </div>
              </div>

              {/* Resources Section */}
              <div className="mt-4 border-t border-green-200 pt-3 dark:border-green-700">
                <p className="mb-2 text-sm font-medium text-green-800 dark:text-green-300">
                  {t.rulesResourcesTitle}
                </p>
                <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
                  {t.rulesResourcesDesc}
                </p>
                <div className="space-y-2">
                  <a
                    href="https://dotcursorrules.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>dotcursorrules.com</span>
                  </a>
                  <a
                    href="https://github.com/PatrickJS/awesome-cursorrules"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span>awesome-cursorrules (GitHub)</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Wispr Flow */}
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t.wisprTitle}
            </h3>
            <a
              href="https://wisprflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 text-sm text-purple-600 hover:text-purple-800 hover:underline"
            >
              {t.wisprUrl}
            </a>
          </div>

          {/* Cursor Integration */}
          <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 transition-shadow hover:shadow-lg dark:border-cyan-700 dark:from-cyan-900/20 dark:to-blue-900/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Mic className="h-6 w-6 text-cyan-600" />
                <h4 className="font-bold text-cyan-800">{t.voiceTitle}</h4>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                <strong>{t.voiceFeature}</strong> {t.voiceDesc}
              </p>
              <div className="rounded bg-gray-900 p-3 font-mono text-sm text-green-400">
                <div className="text-gray-400">{t.voiceExample}</div>
                <div className="mt-2 text-green-400">{t.voiceExampleText}</div>
                <div className="mt-2 text-gray-400">{t.voiceAutoAdd}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* User Rules Section */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {t.userRulesTitle}
        </h3>

        {/* Rule 1 */}
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-orange-800">
                {t.communicationTitle}
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
                    <span>{t.copiedButton}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>{t.copyButton}</span>
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
              <h4 className="font-bold text-red-800">{t.confidenceTitle}</h4>
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
                    <span>{t.copiedButton}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>{t.copyButton}</span>
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
