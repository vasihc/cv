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

export function MCPSlide() {
  return (
    <div className="space-y-8">
      <h2 className="mb-6 text-center text-4xl font-bold">
        🔌 MCP - Расширение возможностей
      </h2>

      {/* MCP Introduction */}
      <div className="rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-violet-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-purple-600 p-2">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-purple-800">
            Model Context Protocol
          </h3>
        </div>
        <p className="mb-4 text-gray-700">
          MCP позволяет AI-ассистентам взаимодействовать с внешними
          инструментами и сервисами, расширяя возможности разработки.
        </p>
        <a
          href="https://glama.ai/mcp/servers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 hover:underline"
        >
          glama.ai/mcp/servers →
        </a>
      </div>

      {/* MCP Servers Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Figma MCP */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Palette className="h-5 w-5 text-blue-600" />
              <h4 className="font-bold text-blue-800">Figma MCP</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              Cursor получает доступ к Figma - можно выделить компонент и
              попросить его реализовать.
            </p>
            <a
              href="https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              figma.com/blog →
            </a>
          </CardContent>
        </Card>

        {/* Context7 */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-green-600" />
              <h4 className="font-bold text-green-800">Context7</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              MCP для правильной документации, чтобы LLM не придумывала
              несуществующие методы.
            </p>
            <a
              href="https://github.com/upstash/context7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-600 hover:underline"
            >
              github.com/upstash/context7 →
            </a>
          </CardContent>
        </Card>

        {/* Semgrep MCP */}
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-pink-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-red-600" />
              <h4 className="font-bold text-red-800">Semgrep MCP</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              Анализирует код на уязвимости и security проблемы.
            </p>
            <a
              href="https://github.com/semgrep/mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-red-600 hover:underline"
            >
              github.com/semgrep/mcp →
            </a>
          </CardContent>
        </Card>

        {/* Playwright MCP */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Eye className="h-5 w-5 text-purple-600" />
              <h4 className="font-bold text-purple-800">Playwright MCP</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              Cursor теперь может видеть результат в браузере и
              взаимодействовать с веб-страницами.
            </p>
            <a
              href="https://github.com/microsoft/playwright-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-600 hover:underline"
            >
              github.com/microsoft/playwright-mcp →
            </a>
          </CardContent>
        </Card>

        {/* GitHub MCP */}
        <Card className="border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <GitBranch className="h-5 w-5 text-gray-600" />
              <h4 className="font-bold text-gray-800">GitHub MCP</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              Cursor создает ветки, PR, триггерит проверки и мержит без
              переключений.
            </p>
            <a
              href="https://github.com/github/github-mcp-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-600 hover:underline"
            >
              github.com/github/github-mcp-server →
            </a>
          </CardContent>
        </Card>

        {/* Database MCP */}
        <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-cyan-600" />
              <h4 className="font-bold text-cyan-800">Database MCP</h4>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3 mt-4 text-sm text-gray-700">
              Доступ к схеме базы данных для лучшего понимания архитектуры.
            </p>
            <a
              href="https://glama.ai/mcp/servers?query=&attributes=category%3Adatabases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-600 hover:underline"
            >
              glama.ai/mcp/servers →
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
