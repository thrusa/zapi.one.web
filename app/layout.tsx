import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const title = "Zapi.One | Games & Creator Software Studio";
const description =
  "Zapi.One is a Brisbane-based interactive studio building original games like EvoLeap and creator-first software like PixelMingo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zapi.one"),
  title,
  description,
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/zapi-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://zapi.one",
    siteName: "Zapi.One",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zapi.One — games & creator software people love to use.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-[var(--font-body)]`}>{children}</body>
    </html>
  );
}
