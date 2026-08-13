import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GDG Thapar | Google Developer Groups",
  description:
    "Google Developer Groups Thapar University — empowering students through community, projects, and events in AI, web, and cloud technology.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <head>
        {/* Scroll reveals start at opacity 0 and are un-hidden by JS. Without JS,
            show everything immediately rather than rendering a blank page. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
