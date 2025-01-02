import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "BiteCart - Maximizing Hotel Revenue by Connecting Guests",
  description:
    "Transform your hotel into a hub of guest engagement. Boost revenue, enhance experiences, and create lasting connections with our innovative platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <link rel="icon" href="/solo_logo.png" />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
