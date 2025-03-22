import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CallNowButton from "@/components/layout/call-now-button";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: "Wehmeyer Process Service, Inc. 918-638-2837",
  description: "Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id="page-container">
          <Header />
          <div id="et-main-area">
            <div id="main-content">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <CallNowButton />
      </body>
    </html>
  );
}
