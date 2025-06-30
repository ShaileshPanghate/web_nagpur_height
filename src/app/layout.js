import { LoadingProvider } from "@/providers/LoadingProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NAGPUR HEIGHTS | Buy Real Estate in Nagpur | Buy, Sell & Rent Real Estate Properties in Nagpur ",
  description: "Looking to invest in real estate in Nagpur? Explore a wide range of verified property listings including residential flats, commercial spaces, and plots for sale in Nagpur. Browse properties in prime Nagpur localities such as Wardha Road, Civil Lines, MIHAN, Manish Nagar, and Dharampeth. Whether you're looking to buy a flat in Nagpur, rent a shop, or sell your property, our platform connects you with trusted builders and RERA-approved projects for a secure transaction. We offer affordable flats, luxury apartments, NA plots, independent houses, and commercial properties including offices, showrooms, and retail spaces. With advanced search filters, latest Nagpur real estate market trends, and expert support, finding the right property in Nagpur is simple and hassle-free. Stay updated with property prices in Nagpur, new launches, and upcoming real estate projects. Whether you're a first-time home buyer or a real estate investor, our portal is your one-stop solution for all Nagpur property needs. Start your property search today on Nagpur’s most trusted real estate website – where finding a home in Nagpur meets professionalism, transparency, and peace of mind.",
  keywords : [
  "Nagpur real estate",
  "property for sale in Nagpur",
  "buy plots in Nagpur",
  "sell plots in Nagpur",
  "buy flat in Nagpur",
  "sell flat in Nagpur",
  "2BHK properties in Nagpur",
  "3BHK flats in Nagpur",
  "affordable flats in Nagpur",
  "luxury flats in Nagpur",
  "ready to move flats Nagpur",
  "under construction flats Nagpur",
  "new residential projects in Nagpur",
  "Nagpur real estate investment",
  "Nagpur property market",
  "real estate developers in Nagpur",
  "best localities to buy property in Nagpur",
  "plots for sale in Hingna Nagpur",
  "residential plots in Nagpur",
  "flats near Wardha Road Nagpur",
  "flats in MIHAN Nagpur",
  "flats near Nagpur Airport",
  "flats for rent in Nagpur",
  "property dealers in Nagpur",
  "real estate agents in Nagpur",
  "Nagpur Heights",
  "Nagpur township projects",
  "investment property in Nagpur",
  "Nagpur metro corridor properties",
  "budget homes in Nagpur",
  "premium projects in Nagpur",
  "property near Samruddhi Expressway"
],
  robots: {
  index: true,
  follow: true,
},
openGraph: {
  title: ` Real Estate Services, Nagpur `,
  description: `Buy, Sell, or Rent Real Estate Browse details, prices, and photos.`,
  siteName: 'Buy, Sell, or Rent Real Estate in Nagpur | Nagpur Heights',
  type: 'website',
},
  icons: {
    icon: "/favicon.ico", // ✅ relative to /public
  },
  verification: {
    google: "ecL8bEp9i-oph2bx8q_qNyFMMy5DrwI6uF0zJS0qT2o", // ✅ This is the proper place
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <LoadingProvider> */}
          {children}
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
