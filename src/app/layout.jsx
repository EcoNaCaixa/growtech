import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const DmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "GrowTechnology",
  description: "We are the future of the furniture market with technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${DmSans} antialiased max-w-full`}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
