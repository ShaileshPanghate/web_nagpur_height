"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { use } from "react";

export default function PropertyDetails({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const [mainImage, setMainImage] = useState(0);

  const Properties = [
    {
      id: 1,
      title: 'Meher Ganga',
      location: 'New Narendra Nagar, Nagpur',
      area: '1500 sq.ft (3BHK)',
      price: '80 Lac',
      type: 'Apartment',
      images: [
        '/images/meher.jpg',
        '/images/property1-1.jpg',
        '/images/property1-2.jpg',
        '/images/meher.jpg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 2,
      title: 'Modern 4BHK Villa in Hingna',
      location: '4BHK For sale in Vyankateshwara kalash, Hingna Nagpur',
      area: '1900 sq.ft (4BHK)',
      price: '55.5 Lac',
      type: 'Villa',
      images: [
        '/images/Vyankateshwara.jpeg',
        '/images/Vyankateshwara2.jpeg',
        '/images/Vyankateshwara3.jpeg',
        '/images/Vyankateshwara4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 3,
      title: 'Commercial Space in Manewada, Nagpur',
      location: 'Manewada, Gandhi Square, Nagpur',
      area: '4115 sqft',
      price: '4.52 Cr',
      type: 'Commercial',
      images: [
        '/images/Manewada.jpeg',
        '/images/Manewada2.jpeg',
        '/images/Manewada3.jpeg',
        '/images/Manewada4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 4,
      title: 'Residential Plot in Privara Vihar 8',
      location: 'Godhani, Nagpur',
      area: '1000.00 - 3000.00 sq.ftconvert unit',
      price: '₹2.2 K/sq.ft',
      type: 'Plot',
      images: [
        '/images/privara.avif',
        '/images/privara2.avif',
        '/images/privara3.avif',
        '/images/privara4.avif'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 5,
      title: "Aarambh",
      area: "1500 sqft",
      price: "₹59.0 Lac",
      location: "Jamtha, Nagpur",
      type: "3 BHK Apartment",
      images: [
        '/images/Jamtha3BHK.jpeg',
        '/images/Jamtha3-3BHK.jpeg',
        '/images/Jamtha4-3BHK.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 6,
      title: "Golden Vista",
      area: "1650 sqft",
      price: "₹67.3 Lac",
      location: "Chinch Bhawan, Nagpur, Maharashtra",
      type: "3 BHK Apartment",
      images: [
        '/images/ChinchBhawan.jpeg',
        '/images/ChinchBhawan2.jpeg',
        '/images/ChinchBhawan3.jpeg',
        '/images/ChinchBhawan4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 7,
      title: "Jaitala, Nagpur",
      area: "1381 sqft",
      price: "₹51.1 Lac",
      location: "Jaitala, Nagpur",
      type: "3 BHK Apartments",
      images: [
        '/images/Jaitala.jpeg',
        '/images/Jaitala2.jpeg',
        '/images/Jaitala3.jpeg',
        '/images/Jaitala4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    {
      id: 8,
      title: "Royal Gardens",
      area: "1633 sqft",
      price: "₹73.5 Lac",
      location: "Bell Tarodi, Nagpur",
      type: "3 BHK Luxury Apartments",
      images: [
        '/images/BellTarodi.jpeg',
        '/images/BellTarodi2.jpeg',
        '/images/BellTarodi3.jpeg',
        '/images/BellTarodi4.jpeg'
      ],
      amenities: '10000 sqft podium Garden, Swimming pool, Meditation center, Gym, CCTV Security, Alloted Parking, Visitors Parking, Indoor Games, Children play area, Jogging Track, Club House, Commercial Shops, Rain water Harvesting, Solar System for common usage.',
      info: 'Modular Kitchen, PoP, Video Door Phones, Intercom, 2*4 Verified Tiles, Jaguar Premium Fittings'
    },
    // ... other properties
  ];

  const property = Properties.find(prop => prop.id === Number(id));

  if (!property) {
    return (
      <>
        <Header />
        <div className="max-w-4xl mx-auto mt-40 p-6 text-center">
          <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto mt-32 px-4 pb-12">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-800">{property.title}</h1>
          <p className="text-xl text-gray-600 mt-2">{property.location}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-4">
              <img
                loading="lazy"
                src={property.images[mainImage]}
                alt={property.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`rounded-md overflow-hidden transition-all ${mainImage === index ? 'ring-4 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                >
                  <img
                    loading="lazy"
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Amenities Section */}
            {property.amenities && (
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.split(', ').map((amenity, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Key Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>

              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Price</span>
                  <span className="text-green-600 font-bold text-lg">{property.price}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Property Type</span>
                  <span className="text-blue-600 capitalize">{property.type}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600 font-medium">Area</span>
                  <span className="text-gray-800">{property.area}</span>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 mt-4">
                  Contact Agent
                </button>
              </div>
            </div>

            {/* Additional Information */}
            {property.info && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
                <ul className="space-y-2 text-gray-700">
                  {property.info.split(', ').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}