import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Catering Services",
  description: "Exquisite catering for all your events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-amber-600">
             GourmetGo
            </Link>
            <div className="flex gap-6">
              <Link href="/menu" className="text-gray-700 hover:text-amber-600 transition">
                Menu
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-amber-600 transition">
                Packages
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 transition">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Catering Co. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
