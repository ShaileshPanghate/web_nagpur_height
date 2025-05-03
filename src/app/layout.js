import { LoadingProvider } from "@/providers/LoadingProvider";
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

export const metadata = {
  title: "NAGPUR HEIGHTS | Real Estate in Nagpur",
  description: "",
  icons: {
    icon: "/favicon.ico", // ✅ relative to /public
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
