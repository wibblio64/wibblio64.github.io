import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "wibblio",
  description: "Professional air-breather.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
