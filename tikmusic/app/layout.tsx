import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikMusic",
  description: "Tiktok Music Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
