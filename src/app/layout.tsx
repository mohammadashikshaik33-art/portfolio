import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import Loader       from "@/components/effects/Loader";
import Cursor       from "@/components/effects/Cursor";
import Ambient      from "@/components/effects/Ambient";
import Particles    from "@/components/effects/Particles";
import Grain        from "@/components/effects/Grain";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Navbar       from "@/components/layout/Navbar";
import Footer       from "@/components/layout/Footer";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", weight: ["400","500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const mono  = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500","600"] });

export const metadata: Metadata = {
  title: "Shaik Mohammad Ashik — Python AI & Automation Developer",
  description:
    "Final-year EEE student at VVIT building Python AI systems, voice automation pipelines, and sensor-driven fault detection — targeting hybrid AI × embedded roles.",
  openGraph: {
    title:       "Shaik Mohammad Ashik — Python AI & Automation Developer",
    description: "Building Intelligent Automation Systems.",
    type:        "website",
  },
  twitter: {
    card:        "summary",
    title:       "Shaik Mohammad Ashik — Python AI & Automation Developer",
    description: "Building Intelligent Automation Systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Loader />
        <Ambient />
        <Particles />
        <Grain />
        <ScrollProgress />
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}