import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025-1",
  description: "เครื่องคิดเลขหลากหลายรูปแบบ",
  keywords: [
    "Calculator",
    "เครื่องคิดเลข",
    "Varity",
    "หลากหลายรูปแบบ",
    "BMI",
    "BMR",
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
