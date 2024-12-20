import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Todo List",
  description: "A simple todo list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
