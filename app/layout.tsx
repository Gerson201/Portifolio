import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gerson Santos | Portfólio",
  description:
    "Portfólio de Engenharia de Software, Ciência de Dados, ML/Visão Computacional e Engenharia Elétrica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-base text-fg antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var key='gs-theme';var stored=localStorage.getItem(key);var prefers=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=stored||'dark';if(!stored&&prefers){theme='dark';}if(theme==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`}
        </Script>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


