import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { ThemeProvider } from "@/components";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Boeds",
  description: "The only Book Store you need",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} `}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
