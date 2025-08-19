import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogs } from '../../data/properties.json';
import BlogCard from "@/components/BlogCard";
import Script from "next/script";
import WhatsApp from "@/components/WhatsApp";
import Instagram from "@/components/Instagram";
import Quora from "@/components/Quora";
import FAQ from "@/components/FAQ";


export async function generateMetadata() {
    return {
        title: '2BHK & 3BHK | Properties in Nagpur | Buy, Sell & Rent Real estate properties in Nagpur | NAGPUR HEIGHTS',
        description:
            "Looking to invest in real estate in Nagpur? Explore a wide range of verified property listings including residential flats, commercial spaces, and plots for sale in Nagpur. Browse properties in prime Nagpur localities such as Wardha Road, Civil Lines, MIHAN, Manish Nagar, and Dharampeth. Whether you're looking to buy a flat in Nagpur, rent a shop, or sell your property, our platform connects you with trusted builders and RERA-approved projects for a secure transaction. We offer affordable flats, luxury apartments, NA plots, independent houses, and commercial properties including offices, showrooms, and retail spaces. With advanced search filters, latest Nagpur real estate market trends, and expert support, finding the right property in Nagpur is simple and hassle-free. Stay updated with property prices in Nagpur, new launches, and upcoming real estate projects. Whether you're a first-time home buyer or a real estate investor, our portal is your one-stop solution for all Nagpur property needs. Start your property search today on Nagpur’s most trusted real estate website – where finding a home in Nagpur meets professionalism, transparency, and peace of mind",
        keywords: [
            "2BHK",
            "3BHK",
            "2BHK & 3BHK Flats",
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
    };
}

export default function BlogList() {

    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QMRPX5VY37"></script>
            <Script id="gtag-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMRPX5VY37');
          `}
            </Script>
            <Header />
            <div className="mt-24 px-4 md:px-12 py-10 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Real Estate Blogs
                </h1>
                <div className="animate-fadeInUp delay-300">
                    <WhatsApp />
                </div>
                <div className="animate-fadeInUp delay-500">
                    <Instagram />
                </div>
                <div className="animate-fadeInUp delay-700">
                    <Quora />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div >
            <FAQ />
            <Footer />
        </>
    );
}
