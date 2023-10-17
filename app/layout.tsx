import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic-ext", "vietnamese", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chowdeck",
  description: "Chowdeck Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>{children}</body>
    </html>
  );
}
