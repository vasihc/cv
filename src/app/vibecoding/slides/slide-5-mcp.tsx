import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Eye,
  Shield,
  Database,
  GitBranch,
  Palette,
  BookOpen,
  Bug,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function MCPSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🔌 MCP - Расширение возможностей",
      introTitle: "Model Context Protocol",
      introDesc:
        "MCP позволяет AI-ассистентам взаимодействовать с внешними инструментами и сервисами, расширяя возможности разработки.",
      introUrl: "glama.ai/mcp/servers →",
      figmaTitle: "Figma MCP",
      figmaDesc:
        "Cursor получает доступ к Figma - можно выделить компонент и попросить его реализовать.",
      figmaUrl: "figma.com/blog →",
      context7Title: "Context7",
      context7Desc:
        "MCP для правильной документации, чтобы LLM не придумывала несуществующие методы.",
      context7Url: "github.com/upstash/context7 →",
      semgrepTitle: "Semgrep MCP",
      semgrepDesc: "Анализирует код на уязвимости и security проблемы.",
      semgrepUrl: "github.com/semgrep/mcp →",
      playwrightTitle: "Playwright MCP",
      playwrightDesc:
        "Cursor теперь может видеть результат в браузере и взаимодействовать с веб-страницами.",
      playwrightUrl: "github.com/microsoft/playwright-mcp →",
      githubTitle: "GitHub MCP",
      githubDesc:
        "Cursor создает ветки, PR, триггерит проверки и мержит без переключений.",
      githubUrl: "github.com/github/github-mcp-server →",
      databaseTitle: "Database MCP",
      databaseDesc:
        "Доступ к схеме базы данных для лучшего понимания архитектуры.",
      databaseUrl: "glama.ai/mcp/servers →",
    },
    en: {
      title: "🔌 MCP - Extending Capabilities",
      introTitle: "Model Context Protocol",
      introDesc:
        "MCP allows AI assistants to interact with external tools and services, expanding development capabilities.",
      introUrl: "glama.ai/mcp/servers →",
      figmaTitle: "Figma MCP",
      figmaDesc:
        "Cursor gets access to Figma - you can select a component and ask it to implement it.",
      figmaUrl: "figma.com/blog →",
      context7Title: "Context7",
      context7Desc:
        "MCP for proper documentation so LLM doesn't invent non-existent methods.",
      context7Url: "github.com/upstash/context7 →",
      semgrepTitle: "Semgrep MCP",
      semgrepDesc: "Analyzes code for vulnerabilities and security issues.",
      semgrepUrl: "github.com/semgrep/mcp →",
      playwrightTitle: "Playwright MCP",
      playwrightDesc:
        "Cursor can now see the result in the browser and interact with web pages.",
      playwrightUrl: "github.com/microsoft/playwright-mcp →",
      githubTitle: "GitHub MCP",
      githubDesc:
        "Cursor creates branches, PRs, triggers checks and merges without switching.",
      githubUrl: "github.com/github/github-mcp-server →",
      databaseTitle: "Database MCP",
      databaseDesc:
        "Access to database schema for better understanding of architecture.",
      databaseUrl: "glama.ai/mcp/servers →",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">{t.title}</h2>

      {/* MCP Introduction */}
      <div className="rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-purple-600 p-2">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-purple-800">{t.introTitle}</h3>
        </div>
        <p className="mb-4 text-gray-700">{t.introDesc}</p>
        <a
          href="https://glama.ai/mcp/servers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 hover:underline"
        >
          {t.introUrl}
        </a>
      </div>

      {/* MCP Servers Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Figma MCP */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Palette className="h-5 w-5 text-blue-600" />
              <h4 className="font-bold text-blue-800">{t.figmaTitle}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">{t.figmaDesc}</p>
            <a
              href="https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              {t.figmaUrl}
            </a>
          </CardContent>
        </Card>

        {/* Context7 */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-green-600" />
              <h4 className="font-bold text-green-800">{t.context7Title}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">{t.context7Desc}</p>
            <a
              href="https://github.com/upstash/context7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-600 hover:underline"
            >
              {t.context7Url}
            </a>
          </CardContent>
        </Card>

        {/* Semgrep MCP */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-red-600" />
              <h4 className="font-bold text-red-800">{t.semgrepTitle}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">{t.semgrepDesc}</p>
            <a
              href="https://github.com/semgrep/mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-red-600 hover:underline"
            >
              {t.semgrepUrl}
            </a>
          </CardContent>
        </Card>

        {/* Playwright MCP */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-purple-600" />
              <h4 className="font-bold text-purple-800">{t.playwrightTitle}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              {t.playwrightDesc}
            </p>
            <a
              href="https://github.com/microsoft/playwright-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-600 hover:underline"
            >
              {t.playwrightUrl}
            </a>
          </CardContent>
        </Card>

        {/* GitHub MCP */}
        <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-gray-600" />
              <h4 className="font-bold text-gray-800">{t.githubTitle}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">{t.githubDesc}</p>
            <a
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:underline"
            >
              {t.githubUrl}
            </a>
          </CardContent>
        </Card>

        {/* Database MCP */}
        <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-cyan-600" />
              <h4 className="font-bold text-cyan-800">{t.databaseTitle}</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">{t.databaseDesc}</p>
            <a
              href="https://glama.ai/mcp/servers?query=&attributes=category%3Adatabases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-600 hover:underline"
            >
              {t.databaseUrl}
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
