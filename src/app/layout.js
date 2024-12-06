import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hassaan Ali - Portfolio",
  description: "A portfolio built with Next.js 15 and MDX",
  icons: {
    icon: "/profile-300.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} `}>
        <Toaster />
        <div className="fixed top-0 m-auto w-full z-50">
          <Header />
        </div>
        <main className="min-h-[83.7vh] mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
