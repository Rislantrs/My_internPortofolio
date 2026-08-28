import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Rislan Tristansyah | Intern Portfolio & Creative Developer",
  description:
    "Official single-page intern portfolio of M Rislan Tristansyah - Telecommunication Systems student at Universitas Pendidikan Indonesia focusing on AI, Cloud Computing, Networking, and Web Engineering.",
  keywords: [
    "M Rislan Tristansyah",
    "Rislan",
    "Intern Portfolio",
    "Creative Developer",
    "AI Enthusiast",
    "Telecommunication Systems",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "M Rislan Tristansyah", url: "https://www.rislantrs.me" }],
  creator: "M Rislan Tristansyah",
  openGraph: {
    title: "M Rislan Tristansyah | Intern Portfolio & Creative Developer",
    description:
      "Telecommunication Systems student at UPI focused on Artificial Intelligence, Cloud Computing, Networking, and Modern Web Engineering.",
    url: "https://www.rislantrs.me",
    siteName: "Rislan Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Rislan Tristansyah | Intern Portfolio",
    description:
      "Explore the portfolio, links, and future capstone projects of M Rislan Tristansyah.",
    creator: "@rislantrs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${mono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
