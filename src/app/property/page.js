import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import SearchFilters from '@/components/SearchFilters';
import AdviceToolsSection from '@/components/AdviceToolsSection';

const Property = () => {
  const Properties = [
    {
      id: 1,
      title: 'Meher Ganga',
      location: 'New Narendra Nagar',
      area: '1500 sq.ft',
      price: '80 Lac',
      type: 'Apartment',
      image: '/images/meher.jpg'
    },
    {
      id: 2,
      title: 'Modern Villa in Dharampeth',
      location: 'Dharampeth, Nagpur',
      area: '2500 sq.ft',
      price: '2.5 Cr',
      type: 'Villa',
      image: '/images/villa.jpg'
    },
    {
      id: 3,
      title: 'Commercial Space in Wardha Road',
      location: 'Wardha Road, Nagpur',
      area: '3500 sq.ft',
      price: '3.8 Cr',
      type: 'Commercial',
      image: '/images/commercial.jpg'
    },
    {
      id: 4,
      title: 'Residential Plot in Manish Nagar',
      location: 'Manish Nagar, Nagpur',
      area: '2400 sq.ft',
      price: '85 L',
      type: 'Plot',
      image: '/images/plot.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div
        className="relative py-16 mt-16 " // 90% opacity blue overlay
        style={{
          backgroundImage: "url('./images/back22.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10"> {/* z-10 brings content above overlay */}
          <h1 className="text-4xl font-bold mb-4 text-black">Find Your Dream Property in Nagpur</h1>
          <p className="text-xl mb-8 text-black">Discover the best residential and commercial properties in Nagpur</p>
          <SearchFilters />
        </div>
      </div>


      <div className="container mx-auto my-8 px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                  {property.type}
                </span>
                <h2 className="text-xl font-bold mb-2">{property.title}</h2>
                <p className="text-gray-600 mb-1">{property.location}</p>
                <p className="text-gray-600 mb-1">{property.area}</p>
                <p className="text-lg font-semibold text-blue-700 mb-4">{property.price}</p>
                <Link href={`/property/${property.id}`}>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <AdviceToolsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;