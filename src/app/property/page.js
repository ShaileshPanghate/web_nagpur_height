import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import SearchFilters from '@/components/SearchFilters';
import AdviceToolsSection from '@/components/AdviceToolsSection';
import WhatsApp from '@/components/WhatsApp';

const Property = () => {
  const Properties = [
    {
      id: 1,
      title: 'Meher Ganga',
      location: 'New Narendra Nagar, Nagpur',
      area: '1500 sqft',
      price: '80 Lac',
      type: 'Apartment',
      image: '/images/meher.jpg'
    },    
    {
      id: 2,
      title: 'Arha Enclave',
      location: 'Plot no. 31, Shilpa Society, Narendra Nagar, Near Shani Dham Mandir, Nagpur, 440015',
      area: '1080 sqft',
      price: '55.5 Lac',
      type: 'Flat 3BHK',
      image: '/images/arhaEnclave.jpg'
    },
    {
      id: 3,
      title: 'Sai Residency',
      location: 'Plot no. 3, Power House Road, New Beedipeth Nagar, Near Ashirwad Nagar Road, Nagpur, 440015',
      area: '1208 sqft',
      // price: '55.5 Lac',
      type: 'Flat',
      image: '/images/saiResidency.PNG'
    },
    {
      id: 4,
      title: 'Ved Vidhi',
      location: 'Khasra No-162, Mouza-Pipla, P.H.No-38, Nagar Panchayat-Besa Pipla, Nagpur, 440015',
      area: '1316 sqft',
      // price: '55.5 Lac',
      type: '2BHK Flat',
      image: '/images/ved_vidhi.PNG'
    },
    {
      id: 5,
      title: 'Ved Vidhi',
      location: 'Khasra No-162, Mouza-Pipla, P.H.No-38, Nagar Panchayat-Besa Pipla, Nagpur, 440015',
      area: '1811 sqft',
      // price: '55.5 Lac',
      type: '3BHK Flat',
      image: '/images/ved_vidhi.PNG'
    },
    {
      id: 6,
      title: 'Modern 4BHK Villa in Hingna',
      location: '4BHK For sale in Vyankateshwara kalash, Hingna Nagpur',
      area: '1900',
      price: '55.5 Lac',
      type: 'Villa',
      image: '/images/Vyankateshwara.jpeg'
    },
    {
      id: 7,
      title: 'Commercial Space in Manewada, Nagpur',
      location: 'Manewada, Gandhi Square, Nagpur',
      area: '4115',
      price: '4.52 Cr',
      type: 'Commercial',
      image: '/images/Manewada.jpeg'
    },
    {
      id: 8,
      title: 'Residential Plot in Privara Vihar 8',
      location: 'Godhani, Nagpur',
      area: '1000.00 - 3000.00 sq.ftconvert unit',
      price: '₹2.2 K/sq.ft',
      type: 'Plot',
      image: '/images/privara.avif'
    },
    {
      id: 9,
      title: "Aarambh",
      area: "1500 sqft",
      price: "₹59.0 Lac",
      location: "Jamtha, Nagpur",
      type: "3 BHK Apartment",
      image: "/images/Jamtha3BHK.jpeg"
    },
    {
      id: 10,
      title: "Golden Vista",
      area: "1650 sqft",
      price: "₹67.3 Lac",
      location: "Chinch Bhawan, Nagpur, Maharashtra",
      type: "3 BHK Apartment",
      image: "/images/ChinchBhawan.jpeg"
    },
    {
      id: 11,
      title: "Jaitala, Nagpur",
      area: "1381 sqft",
      price: "₹51.1 Lac",
      location: "Jaitala, Nagpur",
      type: "3 BHK Apartments",
      image: "/images/Jaitala.jpeg"
    },
    {
      id: 12,
      title: "Royal Gardens",
      area: "1633 sqft",
      price: "₹73.5 Lac",
      location: "Bell Tarodi, Nagpur",
      type: "3 BHK Luxury Apartments",
      image: "/images/BellTarodi.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <WhatsApp />
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
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 relative z-10"> {/* z-10 brings content above overlay */}
          <h1 className="text-5xl  mb-4 text-white">Find Your Dream Property in Nagpur</h1>
          <p className="text-2xl text-white">Discover the best residential and commercial properties in Nagpur</p>
          <SearchFilters />
        </div>
      </div>


      <div className="container mx-auto my-8 px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-black">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  loading="lazy"
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
                <h2 className="text-xl font-bold mb-2 text-black">{property.title}</h2>
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