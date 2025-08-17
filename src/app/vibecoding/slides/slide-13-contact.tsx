import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ContactSlide() {
  return (
    <div className="space-y-8 text-center">
      {/* Git commit style header */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
          <div className="text-gray-400">{"// Keep pushing forward?"}</div>
          <div className="mt-2">
            <span className="text-blue-400">$</span>{" "}
            <span className="text-white">git commit -m</span>{" "}
            <span className="text-green-400">
              &quot;Keep Experimenting 🚀&quot;
            </span>
          </div>
          <div className="mt-1 text-yellow-400">
            [main exp4567] Try new models, tools, workflows every week
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-mono text-2xl font-semibold text-gray-900">
            Ready to keep experimenting with AI?
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
              <MessageSquare className="mr-2 h-4 w-4" />$ npm start conversation
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="font-mono">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />$ cd ../
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer terminal */}
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg bg-gray-900 p-4 font-mono text-sm text-green-400">
          <div className="text-gray-400">{"// Contact information"}</div>
          <div className="mt-2">
            <span className="text-blue-400">Telegram:</span>{" "}
            <span className="text-green-400">@vasihc</span>
          </div>
          <div className="mt-2">
            <span className="text-blue-400">LinkedIn:</span>{" "}
            <span className="text-green-400">linkedin.com/in/vasihc</span>
          </div>
          <div className="mt-2 text-yellow-400">🚀 Спасибо за внимание!</div>
        </div>
      </div>
    </div>
  );
}
