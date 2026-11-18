import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/config/site";
import "./globals.css";
import "../components/pages/pages.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
