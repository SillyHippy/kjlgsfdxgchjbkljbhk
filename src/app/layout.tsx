import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Wehmeyer Process Service, Inc. 918-638-2837",
  description: "Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This prevents caching to help with hydration issues
  noStore();

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div id="page-container">
          <Header />
          <div id="et-main-area">
            <div id="main-content">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <MobileCallButton />
      </body>
    </html>
  );
}
