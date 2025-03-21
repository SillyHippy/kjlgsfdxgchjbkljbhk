import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClientBody } from "./ClientBody";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CallNowButton from "../components/CallNowButton";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Wehmeyer Process Service, Inc. | 918-638-2837",
  description: "Wehmeyer Process Service, Inc. is a licensed Tulsa, OK process service agency serving clients nationwide since 1985.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${openSans.className} h-full bg-gray-50`}>
        <div id="page-container" className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            <ClientBody>{children}</ClientBody>
          </main>
          <Footer />
          <CallNowButton />
        </div>
      </body>
    </html>
  );
}
