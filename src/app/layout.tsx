import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://my-internportofolio.pages.dev"),
  alternates: {
    canonical: "/",
  },
  title: "M Rislan Tristansyah | Full-Stack Developer & AI Solutions Builder",
  description:
    "Official portfolio of M Rislan Tristansyah - Telecommunication Systems student at Universitas Pendidikan Indonesia specializing in Full-Stack Web Development, Artificial Intelligence, and Cloud Infrastructure.",
  keywords: [
    "M Rislan Tristansyah",
    "Rislan",
    "Full-Stack Developer",
    "AI Solutions Builder",
    "Telecommunication Systems",
    "UPI",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "M Rislan Tristansyah", url: "https://www.rislantrs.me" }],
  creator: "M Rislan Tristansyah",
  openGraph: {
    title: "M Rislan Tristansyah | Full-Stack Developer & AI Solutions Builder",
    description:
      "Explore completed real-world projects, verified credentials (Google, Alibaba Cloud), and intelligent digital solutions by M Rislan Tristansyah.",
    url: "https://my-internportofolio.pages.dev",
    siteName: "Rislan Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M Rislan Tristansyah - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M Rislan Tristansyah | Full-Stack Developer & AI Solutions Builder",
    description:
      "Explore completed real-world projects, verified credentials, and intelligent digital solutions by M Rislan Tristansyah.",
    images: ["/og-image.png"],
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
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
