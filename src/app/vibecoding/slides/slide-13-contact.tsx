import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, ExternalLink, Copy, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function ContactSlide() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  
  const handleCopyPromo = () => {
    navigator.clipboard.writeText("r-founders");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = {
    ru: {
      comment: "// Keep pushing forward?",
      gitCommand: "git commit -m",
      commitMessage: '"Keep Experimenting 🚀"',
      commitResult:
        "[main exp4567] Try new models, tools, workflows every week",
      title: "Keep in Touch",
      conversationButton: "$ npm start conversation",
      backButton: "$ cd ../",
      contactInfo: "// Contact information",
      telegram: "Telegram:",
      telegramValue: "@vasihc",
      linkedin: "LinkedIn:",
      linkedinValue: "linkedin.com/in/vasihc",
      thankYou: "🚀 Спасибо за внимание!",
      aiMindsetTitle: "AI Mindset Lab",
      aiMindsetSubtitle: "Лаборатория нового мышления в эпоху AI",
      aiMindsetDesc: "4-недельный интенсив, который научит видеть возможности там, где другие видят сложности. Персональные AI-системы, автоматизация рутины и новый подход к работе.",
      promoLabel: "Промокод для скидки 10%:",
      promoCode: "r-founders",
      copyButton: "Копировать",
      copiedButton: "Скопировано!",
      visitSite: "Перейти на сайт",
    },
    en: {
      comment: "// Keep pushing forward?",
      gitCommand: "git commit -m",
      commitMessage: '"Keep Experimenting 🚀"',
      commitResult:
        "[main exp4567] Try new models, tools, workflows every week",
      title: "Keep in Touch",
      conversationButton: "$ npm start conversation",
      backButton: "$ cd ../",
      contactInfo: "// Contact information",
      telegram: "Telegram:",
      telegramValue: "@vasihc",
      linkedin: "LinkedIn:",
      linkedinValue: "linkedin.com/in/vasihc",
      thankYou: "🚀 Thank you for your attention!",
      aiMindsetTitle: "AI Mindset Lab",
      aiMindsetSubtitle: "Laboratory of New Thinking in the AI Era",
      aiMindsetDesc: "4-week intensive that teaches you to see opportunities where others see complexity. Personal AI systems, routine automation, and a new approach to work.",
      promoLabel: "Promo code for 10% discount:",
      promoCode: "r-founders",
      copyButton: "Copy",
      copiedButton: "Copied!",
      visitSite: "Visit website",
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
          <h3 className="font-mono text-3xl font-bold text-gray-900 dark:text-gray-100">
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
      
      {/* AI Mindset Laboratory Card - moved to the bottom */}
      <div className="mx-auto max-w-2xl mt-8">
        <Card className="relative overflow-hidden border-2 border-purple-300 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] dark:border-purple-600 dark:from-purple-900/30 dark:via-violet-900/30 dark:to-indigo-900/30">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }}></div>
          </div>
          
          <CardContent className="relative p-6">
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/8adbbd35-ecdb-4052-8998-ef57000aa855/logo_round/w=256,quality=90,fit=scale-down"
                  alt="AI Mindset Lab"
                  className="h-16 w-16 rounded-full shadow-lg ring-2 ring-purple-200 dark:ring-purple-700"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-3">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {t.aiMindsetTitle}
                  </h4>
                  <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
                    {t.aiMindsetSubtitle}
                  </p>
                </div>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {t.aiMindsetDesc}
                </p>
                
                {/* Promo code section with better styling */}
                <div className="mb-4 rounded-xl bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-4 shadow-inner">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                    {t.promoLabel}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                      <code className="block rounded-lg bg-white dark:bg-gray-900/50 px-4 py-3 text-center text-xl font-black tracking-wider text-purple-700 dark:text-purple-300 shadow-sm">
                        {t.promoCode}
                      </code>
                      <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg">
                        -10%
                      </Badge>
                    </div>
                    <Button
                      size="default"
                      variant="outline"
                      onClick={handleCopyPromo}
                      className="border-2 border-purple-400 bg-white hover:bg-purple-50 dark:border-purple-600 dark:bg-gray-900/50 dark:hover:bg-purple-900/30 transition-all"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span className="text-green-600 dark:text-green-400">{t.copiedButton}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          {t.copyButton}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg transition-all hover:shadow-xl"
                  size="lg"
                >
                  <a
                    href="https://aimindset.org/ai-mindset?utm_source=r-founders&utm_medium=referral&utm_campaign=r-founders"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    {t.visitSite}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
