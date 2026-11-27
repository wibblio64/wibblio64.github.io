import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Nepeta from "@/components/nepeta";

export const metadata: Metadata = {
  title: "wibblio's website",
  description: "Professional air-breather.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
        <Nepeta/>
      </body>
    </html>
  );
}
