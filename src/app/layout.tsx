
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Problem Solver | Smart Ideas. Real Solutions.",
  description:
    "Problem Solver — innovation, creativity and practical solutions.",
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
