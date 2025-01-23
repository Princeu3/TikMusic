import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "TikMusic",
  description: "Tiktok Music Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider
        signInForceRedirectUrl = "/profile"
        signUpForceRedirectUrl = "/profile"
      >
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
