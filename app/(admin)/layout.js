import "../globals.css";
import { Inter, Roboto, Qwigley } from "next/font/google";
import { Pinyon_Script } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import Header from "../../features/header/header";
import Footer from "../../features/footer/footer";
import Providers from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "700"],
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
  preload: true,
});

export const metadata = {
  title: "Bojana Golubovic Makeup",
  description:
    "Jednostavno zakaži termin za šminkanje, kupi poklon bon ili pronađi pregršt korisnih makeup savjeta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script
          src="https://www.paypal.com/sdk/js?client-id=Ada1fQuR8rR-lnXitXFu3Q9lON08_ubogBgiUb7VLeQn_gLugDTOOb9f8ChtpOh0bTqqwGaobv2-rr3i&locale=en_US&currency=EUR"
          type="text/javascript"
        ></script>
      </head> */}
      <body
        className={`bg-white ${inter.variable} ${roboto.variable} ${qwigley.variable} ${greatvibes.variable} ${pinyonscript.variable}`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
