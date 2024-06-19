import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/Starbg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ravi shankar singh | Portfolio",
  description: "Ravi shankar singh Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarsCanvas/>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
