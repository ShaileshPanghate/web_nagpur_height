import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

const blogs = [
    {
        slug: "nagpur-heights-overview",
        title: "Nagpur Heights – Your Trusted Real Estate Partner",
        image: "/images/blogImg.png",
        content: `
      Welcome to Nagpur Heights. NagpurHeights- Your Trusted Real Estate Partner in Nagpur Maharashtra
      
      We’re more than just a real estate company — we’re a team that believes in helping people find the right place to call home. Whether you’re buying your first flat, looking for a plot to build your dream house, or making a smart investment, we’re here to guide you at every step.
      
      With years of experience and projects spread across Nagpur’s fastest-growing areas, we promise trust, transparency, and value in everything we offer.

      Whether you're looking for a residential plot, a premium flat, a luxurious villa, or a commercial space, Nagpur Heights provides you with legally approved, affordable, and prime properties in Nagpur’s fastest-developing areas.

       ✅Our Mission:

        To deliver legally verified, premium-quality properties with transparent pricing and processes.


        ✅ Our Vision:

        To be Nagpur’s most reliable and customer-friendly real estate company, offering properties that combine value, quality, and future growth potential.
      
      `,
    },
    {
        slug: "2bhk-3bhk-flats-nagpur",
        title: "Why Our 2BHK & 3BHK Flats Are Perfect for You",
        image: "/images/2&3BHK_blogImg.png",
        content: `
      A Home You’ll Love to Live In. 
      
     At Nagpur Heights, we offer thoughtfully designed 2 and 3 BHK flats that perfectly blend comfort, convenience, and affordability. Whether you're a young family, a working professional, or someone looking for a peaceful home, our flats are built to meet every need.

     Our projects are located in fast-developing areas like MIHAN, Jamtha, Wardha Road, Butibori, and Hingna, offering excellent connectivity to schools, colleges, hospitals, and workplaces. Our homes are thoughtfully built with spacious rooms, modern layouts, and all the amenities that make life easy and comfortable.

     📍 Available in Prime Locations:

            MIHAN,           Wardha Road,        Jamtha,

            Besa,          Beltarodi,          Manewada
      
        🏠 Features of Our Flats:

        ✅ Gated Community for safety

        ✅ CCTV Surveillance

        ✅ Reserved Car Parking

        ✅ Landscaped Gardens & Kids Play Area

        ✅ 24x7 Water Supply & Power Backup

        ✅ Excellent connectivity to Schools, Hospitals, Metro, and Markets

        ✅ Earthquake-resistant structures

        Your dream home awaits in a peaceful and well-connected neighborhood.

        Whether you are searching for a cozy 2 BHK or a spacious 3 BHK for your growing family, Nagpur Heights provides homes that are designed for comfort and peace of mind.
        
        📞 Book a Site Visit Today.

        Visit Nagpur Heights and experience how easily one of our flats can become your dream home.

        Come, explore your future home — we’ll guide you every step of the way.
        `,
    },
    {
        slug: "residential-plots-nagpur",
        title: "Residential Plots in Nagpur By Nagpur Heights",
        image: "/images/residentialPlots_blogImg.png",
        content: `Your Land. Your Dream. Your Way.
        
        If building your own home is your dream, Nagpur Heights offers residential plots in the city’s most promising areas like MIHAN, Jamtha, Hingna, Wardha Road, and more.
        
        If you prefer to design and build your own home, our residential plots are a perfect choice. Nagpur Heights offers plots of various sizes suitable for families and investors a like.
        
        📍 Plot Locations Include:

        Wardha Road, MIHAN, Jamtha,
        Hingna, Butibori, Umred Road,
        Besa, Beltarodi, Katol Road, 
        Dabha, Pipla
  
        ✨ Why Our Plots Are the Best:

        ✅ RERA Registered and Clear Title

        ✅ Gated Township Options (in select projects)

        ✅ Proper Roads, Drainage, Water, and Electricity Provisions

        ✅ Located in High Appreciation Areas – Great for Investment

        ✅ Flexible Plot Sizes to suit every need

        Own your piece of land with Nagpur Heights and start building the future you’ve always dreamed of.
        `,
    },
    {
        slug: "why-choose-nagpur-heights",
        title: " Why Choose Nagpur Heights?",
        image: "/logos/NAGPUR_HEIGHTS_LOGO.png",
        content: `When it comes to finding the right property, you deserve someone who’s honest, dependable, and cares about what’s right for you. That’s exactly what Nagpur Heights stands for.
        
        ✅ Prime Locations

        Properties in rapidly developing areas like MIHAN, Wardha Road, Jamtha, Hingna, Butibori, and more.

        Easy connectivity to highways, metro, airport, schools, hospitals, and markets.

        ✅ Affordable Yet Premium

        Best pricing in the region for 2 & 3 BHK flats and residential plots.

        Great value for money with future price appreciation.

        ✅ RERA & Legally Approved

        Fully RERA-registered and clear-title properties.

        Complete legal support, from booking to possession.

        ✅ Modern Amenities

        24/7 water and electricity supply.

        Gated communities, landscaped gardens, wide roads, security, parking, and children’s play areas.


        ✅ High Investment Growth

        Located in Nagpur's fastest-growing corridors.

        Guaranteed value appreciation due to Smart City projects and MIHAN development.

        ✅ Transparency & Trust

        No hidden charges.

        Transparent documentation process.

        ✅ Flexible Payment Options

        EMI facility and bank loan assistance from leading banks.

        Hassle-free booking and easy registration.


        ✅ Customer-Centric Approach

        Dedicated customer service team.

        Timely possession with regular project updates.


        ✅ Eco-Friendly Developments

        At Nagpur Heights, we focus on building long-term relationships, not just transactions. Your trust is our success.
        `,
    },
    {
        slug: "Connect-to-nagpur-heights",
        title: "Contact Us – Let’s Build Your Dream Together!",
        image: "/images/whyChooseNH_blogImg.png",
        content: `
                    We’d love to hear from you! Whether you have questions, want to know more details, or wish to book a site visit — the team at Nagpur Heights is always ready to assist you.

            ....📍 Office Address: [Hingna Naka, Near Bellari Restaurant, Nagpur - 440016]

            📱 Phone: [ 9096076177 ]

            📧 Email: [ nagpurheightsofficial@gmail.com ]

            🌐 Website: [ https://www.nagpurheights.com/ ]

            📲 Social Media: Instagram: https://www.instagram.com/nagpurheights?igsh=aXQ1M3A2eHB5emp1 

            Conclusion:

            At Nagpur Heights, we believe that real estate is not just about buildings, but about creating happy communities, safe investments, and lifetime value. Whether you’re buying your first home, a plot to build your dream house or a commercial space for your business  we are here to guide you every step of the way.

            👉 Ready to invest? Ready to buy your dream home?

            Contact Nagpur Heights today!

            → Drop  Call, message, or visit — whatever works for you. Nagpur Heights is here to help make your property journey smooth and successful.
                    `,
    },
];

export async function generateMetadata({ params }) {
    const blog = blogs.find((b) => b.slug === params.slug);
    return {
        title: `${blog.title} | Nagpur Heights`,
        description: blog.content.slice(0, 150).replace(/\n/g, " ").trim(),
        excerpt: "Explore legally approved residential plots in prime Nagpur locations like MIHAN, Hingna, and Wardha Road. Perfect for families and investors.",
        keywords: [
            blog.title,
            "Nagpur real estate",
            "Nagpur Heights",
            "property in Nagpur",
            "real estate blogs Nagpur",
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
            title: blog.title,
            description: blog.content.slice(0, 200).replace(/\n/g, " ").trim(),
            siteName: 'Nagpur Heights Blog',
            type: 'article',
        },
    };
}
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default function BlogDetail({ params }) {
    const blog = blogs.find((b) => b.slug === params.slug);
    const otherBlogs = blogs.filter((b) => b.slug !== params.slug);

    if (!blog) return notFound();

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
            <main className="pt-14 pb-12 bg-white">
                <section className="relative h-64  text-white">
                    <Image
                        src="/images/back22.jpg"
                        alt="Nagpur properties"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-5xl  mb-4 text-white">{blog.title}</h1>
                    </div>
                </section>

                <nav className="max-w-6xl mx-auto px-4 mt-6 text-sm text-gray-600" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex items-center space-x-2">
                        <li>
                            <a href="/" className="text-blue-600 hover:underline">Home</a>
                        </li>
                        <li>
                            <span>/</span>
                        </li>
                        <li>
                            <a href="/blogs" className="text-blue-600 hover:underline">Blogs</a>
                        </li>
                        <li>
                            <span>/</span>
                        </li>
                        <li className="text-gray-500 truncate max-w-[200px] sm:max-w-none">
                            {blog.title}
                        </li>
                    </ol>
                </nav>


                <div className="flex flex-col lg:flex-row gap-8 items-start mt-10 max-w-6xl mx-auto px-4">
                    {/* Image Column - 30% */}
                    <div className="w-full lg:w-3/12">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg object-cover w-full"
                        />
                    </div>

                    {/* Text Column - 70% */}
                    <div className="w-full lg:w-9/12 text-gray-700 leading-relaxed text-base lg:text-lg whitespace-pre-line">
                        {blog.content}
                    </div>
                </div>
            </main>

            <section className="max-w-6xl mx-auto px-4 mt-16 mb-6 ">
                <hr className="mb-8 border-gray-300" />
                <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also like</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherBlogs.map((item) => (
                        <a
                            key={item.slug}
                            href={`/blogs/${item.slug}`}
                            className="block bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{item.excerpt?.slice(0, 100)}...</p>
                                <span className="text-blue-600 text-sm mt-2 inline-block hover:underline">Read More →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
