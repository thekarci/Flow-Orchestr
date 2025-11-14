import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Site",
  description: "Next.js 14 App Router ile oluşturulmuş web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body>{children}</body>
    </html>
  );
}

