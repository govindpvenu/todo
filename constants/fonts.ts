import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});

export const Wisteria = localFont({
  weight: "500",
  variable: "--font-wisteria",
  display: "swap",
  style: "normal",
  src: "../public/Wisteria.woff",
});
//Back up font
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
