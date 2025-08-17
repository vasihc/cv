import { useLanguage } from "../contexts/LanguageContext";

export function AIRevolutionSlide() {
  const { language } = useLanguage();

  const content = {
    ru: {
      title: "🎯 Вайб-кодинг",
      subtitle: "Зачем?",
      karpathyName: "Andrej Karpathy",
      karpathyQuote: '"Vibe coding is about trusting your gut"',
      software30Title: "Software 3.0",
      software30Subtitle: "The next evolution of development",
      productivityTitle: "+15–20% продуктивности",
      productivityDesc:
        "Стэнфорд, база 100k+ инженеров из 600+ компаний (средний прирост).",
      productivityNote:
        "AI-инструменты ускоряют разработку и повышают продуктивность программистов",
      googleTitle: "Google PM интервью → Vibe Coding",
      googleDesc:
        "45 минут: live-прототип с AI-инструментами вместо классического кейса.",
      googleNote:
        "Уже в Google и других компаниях PM задаются задачи на вайб-кодинг в реал-тайме",
    },
    en: {
      title: "🎯 Vibe Coding",
      subtitle: "Why?",
      karpathyName: "Andrej Karpathy",
      karpathyQuote: '"Vibe coding is about trusting your gut"',
      software30Title: "Software 3.0",
      software30Subtitle: "The next evolution of development",
      productivityTitle: "+15–20% productivity",
      productivityDesc:
        "Stanford, database of 100k+ engineers from 600+ companies (average increase).",
      productivityNote:
        "AI tools accelerate development and increase programmer productivity",
      googleTitle: "Google PM interview → Vibe Coding",
      googleDesc:
        "45 minutes: live prototype with AI tools instead of classic case study.",
      googleNote:
        "Already in Google and other companies, PMs are given vibe coding tasks in real-time",
    },
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      {/* Main headers */}
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-900">{t.title}</h2>
        <h3 className="text-xl text-gray-600">{t.subtitle}</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left side - Vibe Coding tweet */}
        <div className="space-y-4 md:col-span-1">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <img
              src="/vibecoding/x-vibe-coding.jpg"
              alt="Andrej Karpathy Vibe Coding Tweet"
              className="h-auto w-full"
            />
          </div>
          <div className="text-center">
            <h4 className="font-mono text-lg font-semibold text-gray-800">
              {t.karpathyName}
            </h4>
            <p className="text-sm text-gray-600">{t.karpathyQuote}</p>
          </div>
        </div>

        {/* Right side - Software 3.0 image */}
        <div className="space-y-4 md:col-span-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/vibecoding/software-3-0.webp"
              alt="Software 3.0"
              className="h-auto w-full"
            />
          </div>
          <div className="text-center">
            <h4 className="font-mono text-lg font-semibold text-gray-800">
              {t.software30Title}
            </h4>
            <p className="text-sm text-gray-600">{t.software30Subtitle}</p>
          </div>
        </div>
      </div>

      {/* Research Points */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Stanford Research */}
        <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-600 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-blue-800">{t.productivityTitle}</h4>
          </div>
          <p className="mb-3 text-sm text-gray-700">{t.productivityDesc}</p>
          <div className="text-xs font-medium text-blue-600">
            {t.productivityNote}
          </div>
        </div>

        {/* Google PM Interview */}
        <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-green-600 p-2">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="font-bold text-green-800">{t.googleTitle}</h4>
          </div>
          <p className="mb-3 text-sm text-gray-700">{t.googleDesc}</p>
          <div className="text-xs font-medium text-green-600">
            {t.googleNote}
          </div>
        </div>
      </div>
    </div>
  );
}
