import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aptixon | Together We Build Better World",
  description: "Aptixon unified corporate and workforce platform.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#071b3c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/legacy/index.html" as="document" />
      </head>
      <body>{children}</body>
    </html>
  );
}
