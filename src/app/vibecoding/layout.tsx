import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VibeCoding | AI-Powered Development Expert",
  description:
    "VibeCoding - Expert in AI-accelerated software development using Cursor, MCP, and advanced prompting techniques",
};

export default function VibeCodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
