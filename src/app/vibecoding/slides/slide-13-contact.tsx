import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      comment: "// Keep pushing forward?",
      gitCommand: "git commit -m",
      commitMessage: '"Keep Experimenting 🚀"',
      commitResult:
        "[main exp4567] Try new models, tools, workflows every week",
      title: "Ready to keep experimenting with AI?",
      conversationButton: "$ npm start conversation",
      backButton: "$ cd ../",
      contactInfo: "// Contact information",
      telegram: "Telegram:",
      telegramValue: "@vasihc",
      linkedin: "LinkedIn:",
      linkedinValue: "linkedin.com/in/vasihc",
      thankYou: "🚀 Спасибо за внимание!",
    },
    en: {
      comment: "// Keep pushing forward?",
      gitCommand: "git commit -m",
      commitMessage: '"Keep Experimenting 🚀"',
      commitResult:
        "[main exp4567] Try new models, tools, workflows every week",
      title: "Ready to keep experimenting with AI?",
      conversationButton: "$ npm start conversation",
      backButton: "$ cd ../",
      contactInfo: "// Contact information",
      telegram: "Telegram:",
      telegramValue: "@vasihc",
      linkedin: "LinkedIn:",
      linkedinValue: "linkedin.com/in/vasihc",
      thankYou: "🚀 Thank you for your attention!",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8 text-center">
      {/* Git commit style header */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
          <div className="text-gray-400">{t.comment}</div>
          <div className="mt-2">
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">{t.gitCommand}</span>{" "}
            <span className="text-green-400">{t.commitMessage}</span>
          </div>
          <div className="mt-1 text-yellow-400">{t.commitResult}</div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-mono text-2xl font-semibold text-gray-900">
            {t.title}
          </h3>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="font-mono">
            <a
              href="https://www.linkedin.com/in/vasihc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {t.conversationButton}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="font-mono">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backButton}
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer terminal */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
          <div className="text-gray-400">{t.contactInfo}</div>
          <div className="mt-2">
            <span className="text-blue-400">{t.telegram}</span>{" "}
            <span className="text-green-400">{t.telegramValue}</span>
          </div>
          <div className="mt-2">
            <span className="text-blue-400">{t.linkedin}:</span>{" "}
            <span className="text-green-400">{t.linkedinValue}</span>
          </div>
          <div className="mt-2 text-yellow-400">{t.thankYou}</div>
        </div>
      </div>
    </div>
  );
}
