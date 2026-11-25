
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Problem Solver — Everyday Essentials",
  description:
    "Discover thoughtful everyday products at Problem Solver. Smart choices, better living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
