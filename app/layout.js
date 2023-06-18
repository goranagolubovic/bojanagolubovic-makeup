import "./globals.css";
import { Inter, Roboto, Qwigley, Pinyon_Script } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Header from "./features/header/header";
import Footer from "./features/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: "400",
});

const qwigley = Qwigley({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-qwigley",
  weight: "400",
});

const greatvibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-greatvibes",
  weight: "400",
});

const pinyonscript = Pinyon_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pinyonscript",
  weight: "400",
});

export const metadata = {
  title: "Bojana Golubovic Makeup",
  description: "nesto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${qwigley.variable} ${greatvibes.variable} ${pinyonscript.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
