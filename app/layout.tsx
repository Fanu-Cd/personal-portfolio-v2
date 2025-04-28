import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

export const metadata: Metadata = {
  title: "Fanuel Amare",
  description: "Personal portfolio - Fanuel Amare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
