"use client"
import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Image from 'next/image';


const tabs = [
    { label: 'Nagpur Heights', key: 'NH' },
    { label: '2BHK & 3BHK Flats', key: 'Flats' },
    { label: 'Residential Plots in Nagpur Heights', key: 'Plots' },
    { label: 'Why us', key: 'whyNH' },
    { label: `Let's Connect`, key: 'connect' },
];

const tabContent = {
    NH: (
        <div >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug mb-4">
                Nagpur Heights – Your Trusted Real Estate Partner in Nagpur, Maharashtra
            </h2>

            <br />
            <div>
                <h3>Welcome to Nagpur Heights.</h3> <br />
                <p>We’re more than just a real estate company — we’re a team that believes in helping people find the right place to call home. Whether you’re buying your first flat, looking for a plot to build your dream house, or making a smart investment, we’re here to guide you at every step.</p> <br />
                <p>With years of experience and projects spread across Nagpur’s fastest-growing areas, we promise trust, transparency, and value in everything we offer.</p> <br />
                <p>Whether you're looking for a residential plot, a premium flat, a luxurious villa, or a commercial space, Nagpur Heights provides you with legally approved, affordable, and prime properties in Nagpur’s fastest-developing areas.</p> <br />
                <h2>✅Our Mission:</h2>
                <p>To deliver legally verified, premium-quality properties with transparent pricing and processes.</p>
                <h2>✅ Our Vision:</h2>
                <p>To be Nagpur’s most reliable and customer-friendly real estate company, offering properties that combine value, quality, and future growth potential.</p>
            </div>
            <div>
                {/* <Image
                    src="/images/blogImg.jpg"  // ✅ Relative to /public
                    alt="Blog Banner"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-md"
                /> */}
            </div>
        </div>
    ),
    Flats: (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug mb-4">Real Estate News</h2><br/>
           <div>
                <h3>A Home You’ll Love to Live In.</h3> <br />
                <p>At Nagpur Heights, we offer thoughtfully designed 2 and 3 BHK flats that perfectly blend comfort, convenience, and affordability. Whether you're a young family, a working professional, or someone looking for a peaceful home, our flats are built to meet every need.</p> <br />
                <p>Our projects are located in fast-developing areas like MIHAN, Jamtha, Wardha Road, Butibori, and Hingna, offering excellent connectivity to schools, colleges, hospitals, and workplaces. Our homes are thoughtfully built with spacious rooms, modern layouts, and all the amenities that make life easy and comfortable.</p> <br />
                <p>📍 Available in Prime Locations:</p> <br />
                <h2>Manewada</h2>
                <h2>MIHAN</h2>
                <h2>Wardha Road</h2>
                <h2>Jamtha</h2>
                <h2>Besa</h2>
                <h2>Beltarodi</h2><br />

                <p>🏠 Features of Our Flats:</p>
                <h2>✅Earthquake-resistant structures </h2>
                <h2>✅Excellent connectivity to Schools, Hospitals, Metro, and Markets </h2>
                <h2>✅24x7 Water Supply & Power Backup </h2>
                <h2>✅Landscaped Gardens & Kids Play Area </h2>
                <h2>✅Reserved Car Parking </h2>
                <h2>✅CCTV Surveillance </h2>
                <h2>✅Gated Community for safety </h2>
                <p>Your dream home awaits in a peaceful and well-connected neighborhood.</p>
                <p>Whether you are searching for a cozy 2 BHK or a spacious 3 BHK for your growing family, Nagpur Heights provides homes that are designed for comfort and peace of mind.</p>
                <p>📞 Book a Site Visit Today.</p><br />
                <p>Visit Nagpur Heights and experience how easily one of our flats can become your dream home.</p>
                <p>Come, explore your future home — we’ll guide you every step of the way.</p>
            </div>
        </div>
    ),
    Plots: (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug mb-4">Real Estate News</h2><br/>
           <div>
                <h3>A Home You’ll Love to Live In.</h3> <br />
                <p>At Nagpur Heights, we offer thoughtfully designed 2 and 3 BHK flats that perfectly blend comfort, convenience, and affordability. Whether you're a young family, a working professional, or someone looking for a peaceful home, our flats are built to meet every need.</p> <br />
                <p>Our projects are located in fast-developing areas like MIHAN, Jamtha, Wardha Road, Butibori, and Hingna, offering excellent connectivity to schools, colleges, hospitals, and workplaces. Our homes are thoughtfully built with spacious rooms, modern layouts, and all the amenities that make life easy and comfortable.</p> <br />
                <p>📍 Available in Prime Locations:</p> <br />
                <h2>Manewada</h2>
                <h2>MIHAN</h2>
                <h2>Wardha Road</h2>
                <h2>Jamtha</h2>
                <h2>Besa</h2>
                <h2>Beltarodi</h2><br />

                <p>🏠 Features of Our Flats:</p>
                <h2>✅Earthquake-resistant structures </h2>
                <h2>✅Excellent connectivity to Schools, Hospitals, Metro, and Markets </h2>
                <h2>✅24x7 Water Supply & Power Backup </h2>
                <h2>✅Landscaped Gardens & Kids Play Area </h2>
                <h2>✅Reserved Car Parking </h2>
                <h2>✅CCTV Surveillance </h2>
                <h2>✅Gated Community for safety </h2>
                <p>Your dream home awaits in a peaceful and well-connected neighborhood.</p>
                <p>Whether you are searching for a cozy 2 BHK or a spacious 3 BHK for your growing family, Nagpur Heights provides homes that are designed for comfort and peace of mind.</p>
                <p>📞 Book a Site Visit Today.</p><br />
                <p>Visit Nagpur Heights and experience how easily one of our flats can become your dream home.</p>
                <p>Come, explore your future home — we’ll guide you every step of the way.</p>
            </div>
        </div>
    ),
    whyNH: (
        <div>
            <h2>Area Guide</h2>
            <p>Know the best localities in Nagpur to live, invest, or rent.</p>
        </div>
    ),
    connect: (
        <div>
            <h2>Investment Tips</h2>
            <p>Learn how to evaluate properties, understand ROI, and avoid risks.</p>
        </div>
    ),
};

export default function blogs() {
    const [activeTab, setActiveTab] = useState('NH');

    return (
        <>
            <Header />
            <div className='mt-24'>


                <Head>
                    <title>Real Estate Insights | Nagpur Heights</title>
                </Head>

                <div className="tabs-page">
                    <div className="tab-buttons">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        {tabContent[activeTab]}
                    </div>
                </div>

                <style jsx>{`
        .tabs-page {
          padding: 2rem;
        }

        .tab-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #ccc;
        }

        .tab-button {
          padding: 0.75rem 1.25rem;
          background: #f0f0f0;
          border: none;
          border-radius: 5px 5px 0 0;
          cursor: pointer;
          font-weight: 500;
        }

        .tab-button.active {
          background: #fff;
          border: 1px solid #ccc;
          border-bottom: none;
          font-weight: bold;
        }

        .tab-content {
          background: #fff;
          padding: 2rem;
          border: 1px solid #ccc;
          border-radius: 0 0 8px 8px;
        }
      `}</style>
            </div>
        </>
    );
}
