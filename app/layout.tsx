import type { Metadata } from "next";
import { montserrat } from "./_fonts/fonts";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
