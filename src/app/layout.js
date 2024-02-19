import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/elements/Navbar/Navbar";
import Footer from "@/components/elements/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PEMASARAN | SMK NEGERI 1 BANGSRI",
  description: "Website Jurusan Pemasaran SMK Negeri 1 Bangsri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
