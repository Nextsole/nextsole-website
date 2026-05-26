import type { Metadata, Viewport } from "next";
import "./globals.css";

const APP_URL = "https://app.nextsole.co.uk";
const SITE_URL = "https://nextsole.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nextsole — Sneaker Collection Tracker",
  description: "Track, value and manage your sneaker collection. Know what you own, what it's worth, and what to wear next.",
  keywords: ["sneaker collection", "sneaker tracker", "shoe collection", "Jordan tracker", "Nike collection", "sneakerhead", "deadstock", "resell value"],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Nextsole",
    title: "Nextsole — Sneaker Collection Tracker",
    description: "Track, value and manage your sneaker collection. Know what you own, what it's worth, and what to wear next.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nextsole" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextsole — Sneaker Collection Tracker",
    description: "Track, value and manage your sneaker collection.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const APP_LINK = APP_URL + "/login";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}

export { APP_LINK };
